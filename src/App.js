import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation';
import Categories from './components/Categories';
import BookContainer from './components/BookContainer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BookContainer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
