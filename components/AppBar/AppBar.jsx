import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

import Link from 'next/link';



const pagess = [
  {
    id: 1,
    name: 'Szolgáltatások',
    targetUrl: "szolgaltatasok"
  },
  {
    id: 2,
    name: 'Munkatársaink',
    targetUrl: "munkatarsaink"
  },
  {
    id: 3,
    name: 'Áraink',
    targetUrl: "araink"
  },
  {
    id: 4,
    name: 'Kapcsolat',
    targetUrl: "kapcsolat"
  }

]



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);




  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
      <AppBar position="fixed" sx={{ marginBottom: 100 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Box sx={{ display: "flex" }}>
                <HealthAndSafetyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  SMGY

                </Typography>
              </Box>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pagess.map((page) => {
                  return (


                    <MenuItem key={page.id} sx={{ width: 5000, padding: 2 }} onClick={handleCloseNavMenu}>
                      <Link href={`${page.targetUrl}`} >
                        <a>jjj</a>
                      </Link>
                    </MenuItem>


                  )

                }

                )}
              </Menu>
            </Box>

            <Link href="/">
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <HealthAndSafetyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  SMGY
                </Typography>
              </Box>
            </Link>

            <Box sx={{ marginRight: 4, justifyContent: 'right', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pagess.map((page) => {
                return (
                  <Link key={page.id} href={`${page.targetUrl}`}>
                    <Button


                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2, marginRight: 3, color: "white", display: 'block',
                      }}

                    >
                      {page.name}

                    </Button>
                  </Link>

                )
              })}
            </Box>
          </Toolbar>

        </Container>
      </AppBar>
      <Toolbar />

    </>
  );
};
export default ResponsiveAppBar;


// sx={{
//   my: 2, color: purple[500], backgroundColor: purple[500], display: 'block', variant: "outlined", "&:hover": {
//     color: 'gray',
//     backgroundColor: 'transparent'
//   },
// }}
