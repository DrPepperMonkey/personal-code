import NavBar from './NavBar.jsx'
import RSS from './RSS.jsx'
import Search from './Search.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import {createTheme, ThemeProvider, styled} from '@mui/material/styles'
import Weather from './Weather.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff80ab',
    },
    secondary: {
      main: '#ff3d00',
    },
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box id='body'
        sx={{
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/assets/MountainBackground.jpg")',
          backgroundColor: 'transparent',
          backgroundSize: 'cover'
          }}
        >
        <NavBar />
        <Search />
        <RSS />
        <Weather />
      </Box>
      </ThemeProvider>
  );
}

