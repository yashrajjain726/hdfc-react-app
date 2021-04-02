import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar style={{marginLeft:'4%',marginRight:'4%'}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" noWrap style={{marginRight:'10px'}}>
            hdfc 
          </Typography>

          <div >
            <div >
            <Typography  variant="h6" noWrap>
           Smart Bank
          </Typography>
            </div>
           
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge  color="secondary">
              <SearchIcon/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

