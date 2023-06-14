import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GradeIcon from "@mui/icons-material/Grade";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import logo from "./../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { useLogin } from "../../Contexts/auth.context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function TeacherPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [appeals, setAppeals] = useState([]);
  const [token, setToken] = useLogin();

  if (!token) navigate("/login");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:9090/appeals", {
      method: "GET",
      headers: {
        access_token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAppeals(data.appeals);
      });
  }, [token, appeals]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar className='header'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className='d-flex w-100 justify-content-between'
            variant='h6'
            noWrap
            component='div'
          >
            <img src={logo} alt='logo' width={150} />
            <div className='d-flex align-items-center'>
              <h4 className='h5 text-warning m-0'>Ustoz</h4>
              <button
                onClick={() => setToken("")}
                className='btn btn-outline-light ms-3 py-1 px-4 text-center'
              >
                <i className='fa fa-arrow-left me-2' aria-hidden='true'></i>
                chiqish
              </button>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <Link to={"./"} className='text-dark text-decoration-none'>
              <ListItemButton>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText primary={"Murojatlar "} />
                <i className='fa fa-commenting ms-3' aria-hidden='true'></i>
                <sup className='text-danger fs-6 fw-bolder'>
                  {appeals.filter((e) => e.answered == false).length}
                </sup>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={"./news"} className='text-dark text-decoration-none'>
              <ListItemButton>
                <ListItemIcon>
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText primary={"Yangiliklar"} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={"./courses"} className='text-dark text-decoration-none'>
              <ListItemButton>
                <ListItemIcon>
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary={"Kurslar"} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={"./teachers"} className='text-dark text-decoration-none'>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Ustozlar"} />
              </ListItemButton>
            </Link>
          </ListItem>
          <Link to={"./groups"} className='text-dark text-decoration-none'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary={"Guruhlar"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <Link to={"./students"} className='text-dark text-decoration-none'>
              <ListItemButton>
                <ListItemIcon>
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary={"Talabalar"} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to={"./graduations"}
              className='text-dark text-decoration-none'
            >
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={"Bitiruvchilar"} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      {/* main */}
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
        <Divider />
      </Main>
    </Box>
  );
}
