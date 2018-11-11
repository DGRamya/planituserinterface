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
  outline: 0,
  border: "none",
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
                Create Event
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow} style = {sty} component={Link} to = "./About">
                About
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow} style = {sty} component={Link} to = "./ListEvents">
                My Events
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
