import React, { useState } from 'react';
import './Authentication.css'; // Import the CSS file
import { TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, Lock ,Email} from '@mui/icons-material'; // Material-UI icons



export const Singup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Flag for password matching
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here (e.g., API call)
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    // Check if passwords match
    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      if (name === 'password') {
        setPassword(value);
      } else {
        setConfirmPassword(value);
      }
  
      // Validate if passwords match
      setPasswordsMatch(password === confirmPassword);
    };
  
    return (
      <>
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {/* Username Field */}
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: "15px" }}
              />
              
              {/* Email Field */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: "15px" }}
              />
  
              {/* Password Field */}
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="password"
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: "15px" }}
              />
  
              {/* Confirm Password Field */}
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handlePasswordChange}
                error={!passwordsMatch} // Show error if passwords don't match
                helperText={!passwordsMatch ? 'Passwords do not match' : ''} // Error message
                style={{ marginBottom: "15px" }}
              />
  
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!passwordsMatch} // Disable the submit button if passwords don't match
              >
                Sign Up
              </Button>
            </form>
            <a href="/login" className="signup-link">Already have an account? Log In</a>
          </div>
        </div>
      </>
    );
  };
export const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: "15px" }}
            />
            
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: "15px" }}
            />
            
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <a href="/signup" className="signup-link">Sign Up</a>
        </div>
      </div>
    </>
  );
};

