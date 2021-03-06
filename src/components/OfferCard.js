import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import amazon from '../img/amazon.png'
import flipkart from '../img/flipkart.jpg'
import compare from '../img/compare.png'
import myntra from '../img/myntra.png'
import snapdeal from '../img/snapdeal.png'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'4%'

  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={1} >
      <Grid item xs={3} md={2} lg={2}className={classes.cardsize}>
        <Card className={classes.root}>
        <CardActionArea>

        <CardContent>
        <img className={classes.img} src={amazon}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#FFCF40',width:'100%',color:'#FDFEFE'}} className="cardButton">
          Share
        </Button>
        </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={flipkart}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Flipkart
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#DAF7A6',width:'100%',color:'#FDFEFE'}}>
          Earn
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={myntra}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Myntra
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#DFFF00',width:'100%',color:'#FDFEFE'}}>
           Product
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={snapdeal}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Snapdeal
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#40E0D0',width:'100%',color:'#FDFEFE'}}>
          Sale
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={compare}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Compare
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#6495ED',width:'100%',color:'#FDFEFE'}}>
        Products
        </Button>
      </CardActionArea>
    </Card>
      </Grid> 
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={amazon}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#00FF00',width:'100%',color:'#FDFEFE'}}>
          Republic
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={flipkart}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#008080',width:'100%',color:'#FDFEFE'}}>
          Discount 
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={myntra}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#FFCF40',width:'100%',color:'#FDFEFE'}}>
          Sale
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={compare}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#DE3163',width:'100%',color:'#FDFEFE'}}>
          57% Off
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={amazon}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#76448A',width:'100%',color:'#FDFEFE'}}>
        Sale
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={snapdeal}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#76448A ',width:'100%',color:'#FDFEFE'}}>
          90% Off
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={flipkart}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#34495E',width:'100%',color:'#FDFEFE'}}>
        Sale
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={snapdeal}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>
        <Button size="small" color="" style={{backgroundColor:'#FFCF40',width:'100%',color:'#FDFEFE'}}>
          50% Flat
        </Button>
      </CardActionArea>
    </Card>
      </Grid>
    </Grid>
  </div>
  );
}
