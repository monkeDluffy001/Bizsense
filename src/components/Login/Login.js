import React, { useState } from 'react';
import Password from 'components/elements/Password';
import CustInput from 'components/elements/CustInput';
import CustButton from 'components/elements/CustButton';
import { Box, Typography, Stack, Link } from '@mui/material';

const loginBoxStyle = {
  backgroundColor: '#FFFF',
  height: '720px',
  width: '405px',
  border: '1px solid black',
};
const loginStyle = {
  fontSize: '18px',
  fontWeight: 700,
  marginLeft: '51px',
  marginTop: '53px',
  marginBottom: '33px',
};

const loginStackStyle = {
  marginLeft: '51px',
  width: '300px',
};
const textFieldStyle = {
  borderRadius: '8px',
  height: '50px',
  boxSizing: 'border-box',
  color: '#B2B6BD',
};

const loginBtnStyle = {
  height: '50px',
  borderRadius: '8px',
  color: 'var(--WhiteFoam, #FCFEFF)',
  fontWeight: 500,
  fontSize: '18px',
  background: '#5590F2',
};
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box sx={loginBoxStyle}>
      <Typography variant="h5" component="h1" sx={loginStyle}>
        Login
      </Typography>
      <Stack sx={loginStackStyle} direction="column" spacing={2}>
        <CustInput
          label="Mobile Number / Email Address"
          type="text"
          variant="outlined"
          value={username}
          onChange={usernameHandler}
          style={textFieldStyle}
        />
        <Password style={textFieldStyle} value={password} onChange={passwordHandler} />
        <CustButton sx={loginBtnStyle} label="Login" />

        <Link href="#" underline="none" color="#5590F2">
          Forget Password?
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
