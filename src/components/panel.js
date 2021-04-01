import React from 'react';
import CardPanel from './CardPanel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import flipkart from '../img/flipkart.jpg';
import amazon from '../img/amazon.png';
import myntra from '../img/myntra.png';
import snapdeal from '../img/snapdeal.png'
import compare from '../img/compare.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
        <CardPanel className="" name="Amazon" discount="Top Offers" img={amazon}/>
        </Grid>
        <Grid item xs={3}>
        <CardPanel className="" name="Flipkart" discount="Big Friday Sale" img={flipkart}/>
        </Grid>
        <Grid item xs={3}>
        <CardPanel className="" name="Myntra" discount="Sale on Clothes"img={myntra}/>
        </Grid>
        <Grid item xs={3}>
          <CardPanel className="" name="SnapDeal" discount="50% Discount" img={snapdeal}/>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
        <CardPanel className="" name="Compare & Pay" discount="Compare your Products" img={compare}/>
        </Grid>
        <Grid item xs={3}>
        <CardPanel className="" name="Amazon" discount="Big Friday Sale" img={amazon}/>
        </Grid>
        <Grid item xs={3}>
        <CardPanel className="" name="Snapdeal" discount="Sale on Clothes"img={snapdeal}/>
        </Grid>
        <Grid item xs={3}>
          <CardPanel className="" name="Myntra" discount="50% Discount" img={myntra}/>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
        <CardPanel className="" name="Amazon" discount="Top Offers" img={amazon}/>
        </Grid>
        
        </Grid>
      </Grid>
    </div>
  );
}

