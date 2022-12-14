import AppBar from "./AppBar/AppBar.jsx";
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AOS from 'aos';
import 'aos/dist/aos.css';


const themeLight = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
});




const Layout = ({ children }) => {

  useEffect(() => {
    AOS.init(
      {
        duration: 3000,
        once: true

      }
    );
  }, []);

  return (
    <>

      <AppBar />


      <div>{children}</div>

      <footer>
        <h5>Im The footer!</h5>
      </footer>

    </>
  )
}

export default Layout;