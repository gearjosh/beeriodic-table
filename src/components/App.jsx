import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';

function App(){

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={BeeriodicGrid}/>
      </Switch>
    </div>
  );

}

export default App;
