import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { searchProducts } from '../api/api';
import { store } from '../index';
import { Link } from 'react-router-dom'
import Login from './login';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    background: 'white',
    margin: '10px',
    color: 'black',
    border: '2px solid darkgreen'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width:"100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  function searchResult(event) {
    if (event.key === 'Enter' && props.login && props.login.user) {
      const data = {
        "uid": props.login.user,
        "sstring": event.target.value
      };
      (
        async () => {
          let productsdata = await searchProducts(data)
          console.log('Products data', productsdata.data[0]);
          store.dispatch({ type: 'SEARCH_PRODUCT', payload: productsdata.data[0] })
        }
      )()
    } else if ((event.key === 'Enter') && !(props.login && props.login.user)) {
      alert('Login Please');
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to='' style={{ color: 'white' }}>
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ShopCart
          </Typography>
          {
            (props.login && props.login.auth) ?
              <>
                <Button color="inherit" component={Link} to='/profile'>Profile</Button>
                <Button color="inherit"
                  onClick={
                    () => {
                      store.dispatch({ type: 'LOGIN_SUCCESS', payload: null })
                    }
                  }> Logout </Button>
              </>
              :
              <Login></Login>
          }
        </Toolbar>
      </AppBar>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onKeyDown={(event) => searchResult(event)}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.search,
    login: state.login
  }
}
export default connect(mapStateToProps, null)(Header);