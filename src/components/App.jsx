import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';
import AddKegForm from './AddKegForm';
import EditKegForm from './EditKegForm';

function App(){

  return(
    <div className="main-container">
      <style jsx global>{`
        * {
          text-align: center;
          font-family: helvetica;
          box-sizing: border-box;
        }
        html {
          font-size: 14px;
          background-color: #fafafa;
        }
        .main-container {
          padding: 1rem;
          margin: 0 auto;
          max-width: max-content;
        }
        .button {
          border-radius: 0.5rem;
          margin: 1rem;
          font-size: 0.9em;
          border: none;
          background-color: goldenrod;
          color: saddlebrown;
          padding: 0.5rem;
          display: inline-block;
        }
      `}</style>
      <Header/>
    <BeeriodicGrid/>
      <Switch>
        <Route path="/addkeg" component={AddKegForm}/>
        <Route path="/editkeg" component={EditKegForm}/>
      </Switch>
    </div>
  );

}

export default App;
