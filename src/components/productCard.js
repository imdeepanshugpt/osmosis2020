import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140,
  },
});

const ProductCard = (props) => {
  const classes = useStyles();

  const renderCards = () => {
    const data = props.productData;
    const styleCard = {
      margin: '10px',
      width: '800px',
    }
    if (data.length > 0) {
      return data.map((data) => {
        return (
          <Card className={classes.root} key={data.uniq_id} style={styleCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.yourstory.com/cs/wordpress/2016/08/125-fall-in-love.png"
                title="ProductName"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Brand : </b>{data.brand}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5">
                  <b>Product Name :</b>{data.product_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Description: </b>{data.description.substring(0, 100)}
                </Typography>
                <Typography component="h6">
                  <b>Price </b>{data.discounted_price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      });
    }
    return <p>No data</p>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {renderCards()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.search,
    login: state.login
  }
}
export default connect(mapStateToProps, null)(ProductCard);
