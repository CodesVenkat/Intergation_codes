import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { GiWaterRecycling } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
// import { Link, useLocation,useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const pages = [
  "Products",
  "Pricing",
  "Blog",
  "Profile",
  "Account",
  "Dashboard",
  "Logout",
];
const settings = ["Admin","Product"];

function Navs(props) {
  const { data } = props;
  // const history = useHistory();
  const navigate = useNavigate();
  // const location =useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    navigate("/Customercrd")
    debugger;
    setAnchorElNav(null);
    // console.log(data,'currentpage')
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onChange = (e, data) => {
  
    if(e==="Admin"){
      navigate("/Admin", { state: { data } });
    }

    if(e==="Product"){
      navigate("/Product")
    }
    
    // if(e==="Home"){
    //   navigate("/")
    // }
   
  

    
  };
  const handleNavigate = () => {
    // Navigate to the specified route
    navigate('/');
  };

  return (
    <div className="back-img">
      <AppBar
        position="static"
        sx={{ boxShadow: "none", backgroundColor:"lightblue" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* <GiWaterRecycling /> */}
         
          <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleNavigate}
              href="#Main"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "roboto",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{color:"black"}}>Jobs</span>Factory
            </Typography>
         

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon
                  sx={{ color: "#fff !important", backgroundColor: "#fff" }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  textTransform: "none",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              telecord
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu()}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    textTransform: "none",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MdOutlineMenu sx={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting,index) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Box textAlign="center" onClick={(e) => onChange(setting, data)}>
                      {setting}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navs;
