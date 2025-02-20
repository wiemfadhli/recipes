const express = require('express');
const router = express.Router();
const User = require('../Models/user');
router.post("/", async (req, res) => {
  try {
          const user = new  User(req.body);
          await user.save();
          res.send("ok");
      } catch (err) {
          res.status(400).json({ error: err.message });
      }
   
});
router.get('/all', async (req, res)=>
{
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);
/* 
   GET /:username -> Retrieve a user by username
   - Extracts username from request parameters
   - Searches for users matching the username
   - Returns an empty response (false) if no user is found
   - Returns user data if found
*/
router.get('/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const user = await User.find({ username: username }); 
        if ( user.length==0)
        {
                res.json(false);
        }else {
                res.json(user);
        }
              
        
    

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
/* 
   GET /byemail/:email -> Retrieve a user by email
   - Extracts email from request parameters
   - Searches for users matching the email
   - Returns false if no user is found
   - Returns user data if found
*/
router.get('/byemail/:email', async (req, res) => {
        const email = req.params.email;
        try {
            const user = await User.find({ email: email }); // Filter by type
            if ( user.length==0)
            {
                    res.json(false);
            }else {
                    res.json(user);
            }
                  
            
        
    
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    /* 
   GET /login/:username/:password -> User authentication (Not Secure)
   - Extracts username and password from request parameters
   - Finds a user matching both username and password
   - Returns false if credentials are incorrect
   - Returns user data if login is successful
   - ⚠️ SECURITY ISSUE: Passwords should NEVER be stored in plaintext. Use bcrypt for hashing.
*/
    router.get('/login/:username/:password', async (req, res) => {
        try {
            const { username, password } = req.params;
            const user = await User.findOne({ username, password }); 
    
            res.json(user ?? false);
    
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
module.exports = router;


