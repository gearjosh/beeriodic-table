import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';

function App(){

  return(
    <div>
      <style jsx global>{`
        * {
          text-align: center;
          font-family: helvetica;
          box-sizing: border-box;
        }
        html {
          font-size: 100%;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path="/" component={BeeriodicGrid}/>
      </Switch>
    </div>
  );

}

export default App;
