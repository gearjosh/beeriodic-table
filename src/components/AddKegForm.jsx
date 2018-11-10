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
            width: 30rem;
            line-height: 1.8rem;
            padding: .5rem;
            border-radius: .5rem;
            margin: 0 auto;
          }
          .add-keg-input {
            width: 27rem;
            margin: 0.25rem;
            height: 2rem;
            font-size: 1rem;
            background-color: #fafafa;
            border: none;
            border-radius: 0.25rem;
            outline-color: goldenrod;
          }
        `}</style>
        <form>
          <input className="add-keg-input" placeholder="Tap Number" type="text"/>
          <input className="add-keg-input" placeholder="Beer Name" type="text"/>
          <input className="add-keg-input" placeholder="Beer Style" type="text"/>
          <input className="add-keg-input" placeholder="Brewery" type="text"/>
          <input className="add-keg-input" placeholder="Growler Price" type="number"/>
          <br/>
          <button className="button">Add Keg</button>
          <button className="button">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddKegForm;