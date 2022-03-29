import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navigation';
import Categories from './components/Categories';
import BookContainer from './components/BookContainer';
import store from './Redux/ConfigureStore';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
