import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './drawer.css'
import { connect } from 'react-redux/es/exports';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function SideDrawer(props) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(props.sideView);

  React.useEffect(() =>{

  },[props.sideView])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const takeArchiveNotes = () =>{
    props.listenToDrawer('Archive')
    props.dispatch({type : "SET_Title_as_Archive"})
  }

  const takeTrashNotes = () =>{
    props.listenToDrawer('Trash')
    props.dispatch({type : "SET_Title_as_Trash"})
  }

  const takeAllNotes = () =>{
    props.listenToDrawer('Notes')
    props.dispatch({type : "SET_Title_as_Notes"})
  }

  return (
    // <Box sx={{ display: 'flex',marginTop:10 }}>
    //   <CssBaseline />
      
      <Drawer style={{marginTop:10}} variant="permanent" open={props.sideView}>
        
        
        <List>
          
            <ListItem onClick={takeAllNotes} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.sideView ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.sideView ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Notes'} sx={{ opacity: props.sideView ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.sideView ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.sideView ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <NotificationsNoneIcon />
                </ListItemIcon>
                <ListItemText primary={'Reminders'} sx={{ opacity: props.sideView ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.sideView ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.sideView ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <EditOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Edit Labels'} sx={{ opacity: props.sideView ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={takeArchiveNotes} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.sideView ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.sideView ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Archive'} sx={{ opacity: props.sideView ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={takeTrashNotes} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.sideView ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.sideView ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Trash'} sx={{ opacity: props.sideView ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
      
    // </Box>
  );
}

export default connect() (SideDrawer);
