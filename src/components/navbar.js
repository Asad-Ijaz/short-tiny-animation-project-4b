import  React,{useState,useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {Typography,Container} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
    const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
         scrollFunction();
        myFunction();
    }
       
  }, []);
  
function myFunction() {
    // var navbar = document.getElementById("navbar");
        var sticky =document.getElementById("navbar").offsetTop;
    if (window.pageYOffset >= sticky) {
        document.getElementById("navbar").classList.add("sticky")
    } else {
        document.getElementById("navbar").classList.remove("sticky");
    }
  }
  function scrollFunction() {
   
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
      document.getElementById("navbar").style.padding = "60px 10px";
      document.getElementById("navbar").style.backgroundColor ="black";
      document.getElementById("logo").style.fontSize = "32px";
      
    } else {
      document.getElementById("navbar").style.padding = "0px 0px";
      document.getElementById("logo").style.fontSize = "35px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
    
  }
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu className="menu"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
      <a href="#about">About</a>
       
           </MenuItem>
      <MenuItem>
      <a href="/#service">Services</a>
          </MenuItem>
          <MenuItem>
      <a href="/#gallery">Galery</a>
          </MenuItem>
      <MenuItem  >
       <a href="/#testimonial">Testimonial</a>
           </MenuItem>
      <MenuItem>
      <a href="/#contact">Contact</a>
           </MenuItem>
          
    </Menu>
  );

  return (
    <Box  id="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Container maxWidth="xl">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           Grand Restaurant
          </Typography>
           
          <Box sx={{ flexGrow: 1 }} />
          <Box  className="links" sx={{ display: { xs: 'none', sm: 'none',lg: 'block',md: 'block' } }}>
           <a href="#about">About</a>
           <a href="#service">Services</a>
           <a href="#gallery">Gallery</a>
           <a href="#testimonial">Testemonial</a>
           <a href="#contact">Contact</a>
           </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
