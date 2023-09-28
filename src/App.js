import { CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import Router from './routes';
import ThemeConfig from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeConfig>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false} pauseOnHover={false} />
    </ThemeConfig>
  );
};

export default App;
