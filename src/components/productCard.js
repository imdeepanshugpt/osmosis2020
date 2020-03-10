import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140,
  },
});

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/PArle-770x433.png?2TCEl_5_2rZGuRummkQOkQbtJoMXfixx"
          title="ProductName"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
