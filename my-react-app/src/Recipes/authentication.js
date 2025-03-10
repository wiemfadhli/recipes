import React, { useState ,useEffect} from 'react';
import './Authentication.css'; 
import { TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, Lock ,Email} from '@mui/icons-material'; 



export const Singup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Flag for password matching
    const [success, setSuccess] = useState(false);



    /************************************************************ */
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const user={
        "username": username,
        "email":email,
        "password":password
      }
      try {
        const response = await fetch("http://localhost:4000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        console.log("Response status:", response.status);  // Log response status
    
        // Check if the response contains JSON data
        const contentType = response.headers.get("content-type");
        const responseData = contentType?.includes("application/json")
          ? await response.json()  // Parse JSON response if it's in JSON format
          : await response.text();  // Otherwise, handle as plain text
    
        console.log("Server Response:", responseData);  // Log the response body
    
        if (response.ok) {
          setSuccess(true);

        } else {
          // Error: Display server error message
          alert(`Error adding recipe: ${responseData.message || responseData || "Unknown error"}`);
        }
      } catch (error) {
        // Network Error: Display network error message
        console.error("Network Error:", error);
        alert("Failed to add recipe. Please check your network connection.");
      }




    };


    useEffect(() => {
      if (success) {
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          setSuccess(false);
      }
  }, [success]); 














  
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(username + password);

    try {
        const url = `http://localhost:4000/user/login/${encodeURIComponent(username)}/${encodeURIComponent(password)}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log("Response status:", response.status); // Should be 200

        const contentType = response.headers.get("content-type");
        const responseData = contentType?.includes("application/json")
            ? await response.json()  
            : await response.text();  
            if (responseData === false) {
              alert("No connection or invalid response.");
          }
     


    } catch (error) {
        console.error("Network Error:", error);
        alert("Failed to fetch user data. Please check your network connection.");
    }
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

