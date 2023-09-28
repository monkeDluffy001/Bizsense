import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Password = ({ style, value, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <TextField
      label="Password"
      type={show ? 'text' : 'password'}
      variant="outlined"
      value={value}
      style={style}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)} edge="end" tabIndex={-1}>
              {show ? (
                <VisibilityOffOutlinedIcon style={{ fill: '#C4C4C4' }} />
              ) : (
                <VisibilityOutlinedIcon style={{ fill: '#C4C4C4' }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export default Password;
