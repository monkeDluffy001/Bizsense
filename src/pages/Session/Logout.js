import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Badge } from '@mui/material';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Logout() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 800,
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
    </Box>
  );
}
