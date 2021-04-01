import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
//   root: {
//     maxWidth: 200,
//   },
  media: {
      alignItems:'center',
    height: 100,
    width:100
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
        <center>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
          
        />
        <Typography >
            {props.name}
          </Typography>
        </center>
        <CardContent>  
          <Button size="small" color="#56a832" style={{backgroundColor:"#56a832"}}>
          {props.offers}
        </Button>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}


