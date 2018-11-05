// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
// import Event from "./Event";
// import About from "./About";
// import Home from "./Home";
// import LoginPage from "./LoginPage";
// import theme from "./theme"
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// const styles = {
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#F17070",
//
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };
// //
// const menuStyle = {
//   marginLeft: 15,
// };
//
// const appBarStyle = {
//   backgroundColor: "#F17070",
//   color: "#F17070"
// };
//
// const appstyles = {
//   AppBar: {
//     background: "black",
//   },
// };
//
//
// export default class ButtonAppBar {
//   const { classes } = props;
//   render(){
//     return (
//       <div className={classes.root}>
//         <MuiThemeProvider theme={theme}>
//           <AppBar position="static" style={{ backgroundColor: {blue500} }}>
            // <Toolbar>
            //   <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
            //     <MenuIcon />
            //   </IconButton>
            //     <Typography variant="h6" color="inherit" className={classes.grow} style = {menuStyle} component={Link} to = "./Home">
            //     Home
            //   </Typography>
            //   <Typography variant="h6" color="inherit" className={classes.grow} style = {menuStyle} component={Link} to = "./Event">
            //     My Events
            //   </Typography>
            //   <Typography variant="h6" color="inherit" className={classes.grow} style = {menuStyle} component={Link} to = "./About">
            //     About
            //   </Typography>
            //   <Button color="inherit" component={Link} to = "./registration">Register</Button>
            //   <Button color="inherit" component={Link} to = "./Login">Login</Button>
            // </Toolbar>
//           </AppBar>
//         </MuiThemeProvider>
//       </div>
//     );
//   }
//
// }
//
// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// // export default withStyles(styles)(ButtonAppBar);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const menuStyle = {
   marginLeft: 15,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const divStyle1 = {
  float: "left",
  width: "330%",
}

const divStyle2 = {
  float: "right",
  align: "right",
  width: "40%",
}

const sty = {
  float: "left",
  paddingLeft: "5%",
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#F17070' }}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div style = {divStyle1}>
              <Typography variant="h6" color="inherit" className={classes.grow} style = {sty} component={Link} to = "./Home">
                Plan It
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow} style = {sty} component={Link} to = "./Event">
                My Events
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow} style = {sty} component={Link} to = "./About">
                About
              </Typography>
            </div>
          <div style={divStyle2}>
            <Button color="inherit" component={Link} to = "./registration">Register</Button>
            <Button color="inherit" component={Link} to = "./Login">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
