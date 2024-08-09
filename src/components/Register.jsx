import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import ForwardButton from './ForwardButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Register = ({ isButtonActive, setIsButtonActive }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({
    firstName: '',
    role: '',
    email: '',
    password: ''
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isFirstNameValid = firstName.trim() !== '';
  const isRoleValid = role.trim() !== '';
  const isEmailValid = validateEmail(email);

  const isPasswordLongEnough = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordComplex = hasUppercase && hasLowercase && hasNumber && hasSymbol;

  useEffect(() => {
    setIsButtonActive(
      isFirstNameValid && isRoleValid && isEmailValid && isPasswordLongEnough && isPasswordComplex
    );
  }, [isFirstNameValid, isRoleValid, isEmailValid, isPasswordLongEnough, isPasswordComplex]);




    const submitHandler = (event) => {
    event.preventDefault();
    const newErrors = {
      firstName: '',
      role: '',
      email: '',
      password: ''
    };
  
    let isValid = true;
  
    if (!firstName) {
      newErrors.firstName = 'First Name cannot be empty';
      isValid = false;
    }
  
    if (!role) {
      newErrors.role = 'Role cannot be empty';
      isValid = false;
    }
  
    if (!email) {
      newErrors.email = 'Email cannot be empty';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
  
    if (!password) {
      newErrors.password = 'Password cannot be empty';
      isValid = false;
    } else if (!isPasswordComplex) {
      newErrors.password = 'Password does not meet the required criteria.';
      isValid = false;
    } else if (!isPasswordLongEnough) {
      newErrors.password = 'Password must be atleast 8 characters long';
      isValid = false;
    }
  
    setErrors(newErrors);
  
    if (isValid) {
      console.log('Form submitted successfully');
      console.log('First Name:', firstName);
      console.log('Middle Name:', middleName);
      console.log('Last Name:', lastName);
      console.log('Role:', role);
      console.log('Email:', email);
      console.log('Image:', image);
      console.log('Password:', password);
    }
  };

  return (
    <Container 
    sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
       maxWidth: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        marginTop: '24px',
        marginBottom: '8px'
    }}
  >
    <Typography 
      variant="h1"
      sx={{ 
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700,
        fontSize: '32px',
        color: '#1E3452',
        marginBottom: '12px'
      }}
    >
      Create account
    </Typography>
    <Typography 
      variant="body1"
      sx={{ 
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        color: '#546E7A',
        marginBottom: '32px'
      }}
    >
      Enter the details to create your account
    </Typography>
    <Box component="form">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageUpload onImageUpload={setImage} />
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} lg={4} sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
          <TextField 
            variant="outlined"
            label="First Name"
            size="medium"
            fullWidth
            required
            sx={{ color: '#90A4AE', maxWidth: '90vw', }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} lg={4} sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
          <TextField 
            variant="outlined"
            label="Middle Name"
            size="medium"
            fullWidth
            sx={{ color: '#90A4AE', maxWidth: '90vw' }}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} lg={4} sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
          <TextField 
            variant="outlined"
            label="Last Name"
            size="medium"
            fullWidth
            sx={{ color: '#90A4AE', maxWidth: '90vw' }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
          <TextField 
            variant="outlined"
            label="Role"
            size="medium"
            fullWidth
            required
            sx={{ color: '#90A4AE', maxWidth: '90vw' }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            error={!!errors.role}
            helperText={errors.role}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} lg={6} sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
          <TextField 
            variant="outlined"
            type="email"
            label="Email"
            size="medium"
            fullWidth
            required
            sx={{ color: '#90A4AE', maxWidth: '90vw' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        
        <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField 
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              size="medium"
              fullWidth
              required
              sx={{ color: '#90A4AE', maxWidth: '90vw' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CheckCircleIcon sx={{ color: isPasswordLongEnough ? '#1E3452' : '#CFD8DC', borderRadius: '50px', mr: 1 }} />
          <Typography variant="body2" sx={{ color: isPasswordLongEnough ? '#1E3452' : '#546E7A', fontFamily: 'Manrope, sans-serif' }}>
            password must be at least 8 characters long
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon sx={{ color: isPasswordComplex ? '#1E3452' : '#CFD8DC', borderRadius: '50px', mr: 1 }} />
          <Typography variant="body2" sx={{ color: isPasswordComplex ? '#1E3452' : '#546E7A', fontFamily: 'Manrope, sans-serif' }}>
            must include one uppercase, lowercase, number, & symbol
          </Typography>
        </Box>

      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button 
          type="submit"
          onClick = {submitHandler}
          sx={{ 
            backgroundColor: isButtonActive ? '#1E3452' : '#CFD8DC',
            border: 'none',
            color: isButtonActive ? 'white' :'black',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: '600px',
            width: '500px',
            height: '48px',
            maxWidth: '90vw',
            textTransform: 'none',
            '&:hover': {
            backgroundColor: isButtonActive ? '#2A4160' : '#CFD8DC',
            width: isButtonActive ? '504px' : '500px',
            height: isButtonActive ? '49px' : '48px'
      },
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 10 }}>
      <Typography variant="body2" sx={{color: '#546E7A', fontSize: '16px'}}>
        Already have an account 
      </Typography>
      <Link to="/login">
        <ForwardButton label="Login" />
      </Link>
    </Box>
  </Container>
  )
}

export default Register