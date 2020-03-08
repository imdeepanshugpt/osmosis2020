import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/header';
import history from './history';
import ProductCard from './components/productCard';

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

export default App;
