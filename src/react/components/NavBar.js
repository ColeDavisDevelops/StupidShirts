import React from 'react';
// MATERIAL-UI
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    padding: 12,
  },
  icon: {
    color: 'black',
  }
}));

/**
  * @desc hides the navbar when the user scrolls down, shows navbar when the user scrolls up
  * @param Object props - the html window, and the target child to be hidden
  * @return a dynamically displayed Component
*/
const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// displays the app NavBar
const NavBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar color="white" display="flex" elevation={1}>
          <Toolbar >
            <Typography variant="h6" align="left" className={classes.title}>
              <NavLink style={{ textDecoration: 'none', color: 'unset' }} to="/" color="inherit">
                STUPID SHIRTS
              </NavLink>
            </Typography>
            <IconButton aria-label="cart" className={classes.icon}>
                <NavLink style={{ textDecoration: 'none', color: 'unset' }} to="/cart">
                  <LocalMallOutlinedIcon />
                </NavLink>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default NavBar;