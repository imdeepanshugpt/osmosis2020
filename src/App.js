import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/header';
import history from './history';
import ProductCard from './components/productCard';
import Profile from './components/profile';
import { connect } from 'react-redux';
import Footer from './components/footer';

const App = (props) => {
  return (
    <div className="App">
      <Router history={history}>
        <Header login={props.login}></Header>
        <div className="content" style={{ minHeight: '70vh' }}>
          <Route path="/" exact component={ProductCard} />
          <Route path="/profile" component={Profile} />
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.search,
    login: state.login
  }
}

export default connect(mapStateToProps, null)(App);
