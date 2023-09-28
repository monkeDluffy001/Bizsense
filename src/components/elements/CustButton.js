import React from 'react';
import { Button } from '@mui/material';

const CustButton = ({ label, sx }) => {
  return (
    <Button sx={sx} variant="contained">
      {label}
    </Button>
  );
};

export default CustButton;
