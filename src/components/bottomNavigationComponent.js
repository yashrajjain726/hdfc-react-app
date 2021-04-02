import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottomNavigation"
    >
      <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Guest Orders" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
