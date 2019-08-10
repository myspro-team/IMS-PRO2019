import React from 'react';
import './../App.css'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 320
  },
  nested: {
    paddingLeft: theme.spacing(8),
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
  	<div>
    	<nav id="menu" className='panel' role="navigation">
			<List
		      component="nav"
		      aria-labelledby="nested-list-subheader"
		      className={classes.root}
		      id='list'
		    >
		      <ListItem button>
		        <ListItemIcon className='color'>
		          <SendIcon />
		        </ListItemIcon>
		        <ListItemText primary="Home" />
		      </ListItem>
		      <ListItem button onClick={handleClick}>
		        <ListItemIcon>
		          <InboxIcon />
		        </ListItemIcon>
		        <ListItemText primary="Interships Managements" />
		        {open ? <ExpandLess /> : <ExpandMore />}
		      </ListItem>
		      <Collapse in={open} timeout="auto" unmountOnExit>
		        <List component="div" disablePadding>
		          <ListItem button className={classes.nested}>
		            <ListItemIcon>
		              <StarBorder />
		            </ListItemIcon>
		            <ListItemText primary="Internship" />
		            
		          </ListItem>
		          <ListItem button className={classes.nested}>
		            <ListItemIcon>
		              <StarBorder />
		            </ListItemIcon>
		            <ListItemText primary="Import" />
		            
		          </ListItem>
		        </List>
		      </Collapse>
		      <ListItem button>
		        <ListItemIcon>
		          <DraftsIcon />
		        </ListItemIcon>
		        <ListItemText primary="Courses" />
		      </ListItem>
		      <ListItem button>
		        <ListItemIcon>
		          <DraftsIcon />
		        </ListItemIcon>
		        <ListItemText primary="Settings" />
		      </ListItem>
		    </List>
		</nav>

		<div className="wrap push shrink">

	        <a href="#menu" className="menu-link">&#9776;</a>

	        <h1>The contens is here</h1>
	        <h3>Hello</h3>
	    </div>

    </div>
  );
}

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import SvgIcon from '@material-ui/core/SvgIcon';

// const drawerWidth = 300;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));

// export default function PersistentDrawerLeft() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   function handleDrawerOpen() {
//     setOpen(true);
//   }

//   function handleDrawerClose() {
//     setOpen(false);
//   }

//   function showIcon(index){
//   	console.log('haha')
//   	if(index === 0) {
//   		return  <SvgIcon>
// 			      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
// 			    </SvgIcon>
//   	}
//   	if(index === 1) {
//   		return  <SvgIcon>
// 				    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
// 				</SvgIcon>
//   	}
//   	if(index === 4) {
//   		return  (
// 	  		<div>
// 	  			<SvgIcon>
// 				    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
// 				</SvgIcon>
// 			</div>
// 		)
//   	}
//   	if(index === 5) {
//   		return  <SvgIcon>
// 				    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
// 				</SvgIcon>
//   	}
//   }

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Internship Managements
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {['Home', 'Internship Managements','Internship','Import', 'Courses', 'Setting'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//               	{
//               		showIcon(index)
//               	}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
       
        
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//         <Typography paragraph>
//           Haha
//         </Typography>
//         <Typography paragraph>
//           Huhu
//         </Typography>
//       </main>
//     </div>
//   );
// }

