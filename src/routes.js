import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainPage from './MainPage';
import SavedRecipesPage from './SavedRecipesPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/saved-recipes" component={SavedRecipes} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
