import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';
import AddKegForm from './AddKegForm';

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
          font-size: 14px;
        }
        .button {
          border-radius: 5px;
          margin: 5px;
          font-size: 0.9em;
          border: none;
          background-color: goldenrod;
          color: saddlebrown;
          padding: 5px;
          display: inline-block;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path="/" component={BeeriodicGrid}/>
        <Route path="/addkeg" component={AddKegForm}/>
      </Switch>
    </div>
  );

}

export default App;
