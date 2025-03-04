const request = require('supertest');
const mongoose = require('mongoose'); 
const app = require('../server'); 
const user = require('../Models/user');

describe('test add new user ', () => {
    
  it('should add a new user ', async () => {
      const newUser = {
          username:'wiem',
          email: 'wiemfadhli@gmail.com',
          password:'wiem12457', 
        };

    const res = await request(app).post('/user/').send(newUser);

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('ok');

  });
  afterAll(async () => {
      await user.deleteMany({});
    });
});

describe('GET all user ', () => {
    let userId;

    beforeAll(async () => {
    await user.deleteMany({});
     const User = await user.create({
         username:'wiem',
         email: 'wiemfadhli@gmail.com',
         password:'wiem12457', 
         });
        
            userId =  User._id;
        })

    it('should return all users', async () => {
      const res = await request(app).get('/user/all');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
  
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0].username).toBe('wiem'); 
      expect(res.body[0].email).toBe('wiemfadhli@gmail.com'); 
      expect(res.body[0].password).toBe('wiem12457'); 
    });
  
    it('should return an empty array if no users exist', async () => {
   
      await user.deleteMany({});
      const res = await request(app).get('/user/all');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([]); 
    });
    afterAll(async () => {
      await user.deleteMany({});
    });
  });
  describe('GET user by username and password', () => {
    let userId;

    beforeAll(async () => {
        await user.deleteMany({});
        const newUser = await user.create({
            username: 'wiem',
            email: 'wiemfadhli@gmail.com',
            password: 'wiem12457',
        });

        userId = newUser._id;
    });

    it('should return user by password and username', async () => {
        const res = await request(app).get('/user/login/wiem/wiem12457');
        expect(res.statusCode).toBe(200);

        // Check for correct user properties
        expect(res.body).toHaveProperty("username", "wiem");
        expect(res.body).toHaveProperty("email", "wiemfadhli@gmail.com");
        expect(res.body).toHaveProperty("password", "wiem12457");
    });

    it('should return false if username and password do not match', async () => {
        const res = await request(app).get('/user/login/wiem/nowiem');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(false);
    });

    afterAll(async () => {
        await user.deleteMany({});
    });
});

describe('GET user by email ', () => {
    let userId;

    beforeAll(async () => {
        await user.deleteMany({});
        const newUser = await user.create({
            username: 'wiem',
            email: 'wiemfadhli@gmail.com',
            password: 'wiem12457',
        });

        userId = newUser._id;
    });

    it('should return user by mail ', async () => {
        const res = await request(app).get('/user/byemail/wiemfadhli@gmail.com');
        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    // Check the first user object
    const user = res.body[0]; 
    expect(user).toHaveProperty("username", "wiem");
    expect(user).toHaveProperty("email", "wiemfadhli@gmail.com");
    expect(user).toHaveProperty("password", "wiem12457");
    });

    it('should return false if username and password do not match', async () => {
        const res = await request(app).get('/user/byemail/nowiem');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(false);
    });

    afterAll(async () => {
        await user.deleteMany({});
    });
});
describe('GET user by username ', () => {
    let userId;

    beforeAll(async () => {
        await user.deleteMany({});
        const newUser = await user.create({
            username: 'wiem',
            email: 'wiemfadhli@gmail.com',
            password: 'wiem12457',
        });

        userId = newUser._id;
    });

    it('should return user by user name  ', async () => {
        const res = await request(app).get('/user/wiem');
        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    // Check the first user object
    const user = res.body[0]; 
    expect(user).toHaveProperty("username", "wiem");
    expect(user).toHaveProperty("email", "wiemfadhli@gmail.com");
    expect(user).toHaveProperty("password", "wiem12457");
    });

    it('should return false if username ', async () => {
        const res = await request(app).get('/user/nowthing');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe(false);
    });

    afterAll(async () => {
        await user.deleteMany({});
    });
});


