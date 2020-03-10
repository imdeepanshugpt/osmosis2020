import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/header';
import history from './history';
import ProductCard from './components/productCard';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Router history={history}>
        <Route path="/" exact component={ProductCard} />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.search
  }
}

export default connect(mapStateToProps, null)(App);
