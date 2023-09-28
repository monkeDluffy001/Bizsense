import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddBtn = () => {
  return (
    <Fab
      sx={{ borderRadius: '8px', backgroundColor: '#22C550', width: '40px' }}
      variant="extended"
      size="large"
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
};
