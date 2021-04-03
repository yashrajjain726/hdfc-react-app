import React, { Component } from "react";
import lowerBanner from "../img/lowerBanner.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Banner2 from '../img/banner2.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "50%",
  },
}));
export default function LowerSection() {
  const classes = useStyles();
  return (
    <div>
      {/* <img src={lowerBanner} style={{width:'100%'}} alt=""></img>
                <img src={lowerBanner} style={{width:'100%'}} alt=""></img>
                <img src={lowerBanner} style={{width:'100%'}} alt=""></img> */}
      <Grid container spacing={1} style={{marginTop:'1%'}}>
        <Grid item xs={4} md={4} lg={12} className={classes.cardsize}>
            <img src={lowerBanner} style={{width:'100%'}}></img>
        </Grid>
        <Grid item xs={4} md={4} lg={12} className={classes.cardsize}>
            <img src={Banner2} style={{width:'100%',}}></img>
        </Grid><Grid item xs={4} md={4} lg={12} className={classes.cardsize}>
            <img src={lowerBanner} style={{width:'100%',}}></img>
        </Grid>
      </Grid>
    </div>
  );
}
