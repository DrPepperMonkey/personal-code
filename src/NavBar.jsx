import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Drawer.jsx';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <Button color='inherit'>About</Button>
          <Button color='inherit'
            onClick={() => {

            }}>
              Projects
            </Button>
          <Button color='inherit'>Media</Button>
          <Button color="inherit" sx={{
            right: '1%',
            position: 'absolute'
          }}>Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}