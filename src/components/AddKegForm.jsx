import React from 'react';
import BeeriodicGrid from './BeeriodicGrid';

function AddKegForm(){
  return (
    <div>
      <BeeriodicGrid/>
      <div className="add-area">
        <style jsx>{`
          .add-area {
            margin-top: 5px;
            background-color: #4A4A4A;
            width: 15rem;
            line-height: 25px;
            padding: 5px;
            border-radius: 5px;
            color: white;
          }

        `}</style>
        <form>
          <input placeholder="Tap Number" type="text"/>
          <input placeholder="Beer Name" type="text"/>
          <input placeholder="Beer Style" type="text"/>
          <input placeholder="Brewery" type="text"/>
          <input placeholder="Growler Price" type="number"/>
          <br/>
          <button className="button">Add Keg</button>
          <button className="button">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddKegForm;