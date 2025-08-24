import { AppBar, Button, Fade, Grid, Menu, MenuItem, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home"

export default function Header() {
  const cartItems = useSelector(state => state.cart.cart);
  const viewItems = useSelector(state => state.view.view);
  const navigate = useNavigate();
  const location = useLocation();  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleUser = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const returnFavorite = () => navigate("/view");
  const returnCart = () => navigate("/order");
  const handleProfile = () => navigate("/profile");
  const handleAccount = () => navigate("/login");
  const handleLogOut = () => navigate("/logout");

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar> 
      <Toolbar>
        <Grid container spacing={1} xs={12} sm={6} md={4} lg={2}>
          <img src="/images/mainProducts/logo.png" style={{ borderRadius: "50%", width: "8%", height:"8%" }} alt="Shopping Mart" />
          
          <Button 
            onClick={() => navigate("/")} 
            style={{ 
              color: isActive("/") ? "pink" : "white",   
              fontWeight: isActive("/") ? "bold" : "normal"
            }}
          >
            <HomeIcon />
          </Button>

          <Button 
            onClick={() => navigate("/catalog/_Wmen")} 
            style={{ 
              color: isActive("/catalog/_Wmen") ? "pink" : "white", 
              fontWeight: isActive("/catalog/_Wmen") ? "bold" : "normal"
            }}
          >
            WOMEN
          </Button>

          <Button 
            onClick={() => navigate("/catalog/_Mmen")} 
            style={{ 
              color: isActive("/catalog/_Mmen") ? "pink" : "white", 
              fontWeight: isActive("/catalog/_Mmen") ? "bold" : "normal"
            }}
          >
            MEN
          </Button>

          <Button 
            onClick={() => navigate("/catalog/_Bag")} 
            style={{ 
              color: isActive("/catalog/_Bag") ? "pink" : "white", 
              fontWeight: isActive("/catalog/_Bag") ? "bold" : "normal"
            }}
          >
            BAGS
          </Button>

          <Button onClick={() => {}} style={{ color: "white" }}>
            <SearchIcon />
          </Button>

          <img 
            onClick={handleUser} 
            src="/images/mainProducts/adminUser.png" 
            style={{ borderRadius: "50%", width: "5%", height:"5%", padding:"2%" }} 
            alt="adminUser" 
          />
          <Menu
            id="fade-menu"
            slotProps={{ list: { 'aria-labelledby': 'fade-button' } }}
            slots={{ transition: Fade }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleAccount}>My account</MenuItem>
            <MenuItem onClick={handleLogOut}><Logout /></MenuItem>
          </Menu>

          <Button onClick={returnFavorite} style={{ color: "white", marginLeft: "auto" }}>
            <FavoriteIcon /> {viewItems.length}
          </Button>

          <Button onClick={returnCart} style={{ color: "white", marginLeft: "auto" }}>
            <ShoppingCartIcon /> {cartItems.length}
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
