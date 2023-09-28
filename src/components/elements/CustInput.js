import React from 'react';
import { TextField } from '@mui/material';

const CustInput = ({ label, type, style, onChange, value }) => {
  return <TextField label={label} type={type} variant="outlined" style={style} value={value} onChange={onChange} />;
};

export default CustInput;
