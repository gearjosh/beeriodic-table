import React from 'react';
import BeeriodicGrid from './BeeriodicGrid';

function EditKegForm(){
  return (
    <div>
      <BeeriodicGrid/>
      <div className="edit-area">
        <style jsx>{`
          .edit-area {
            margin-top: 5px;
            background-color: #4A4A4A;
            width: 30rem;
            line-height: 1.8rem;
            padding: .5rem;
            border-radius: .5rem;
            margin: 0 auto;
          }
          .edit-keg-input {
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
          <input className="edit-keg-input" placeholder="Tap Number" type="number"/>
          <button className="button">Load Keg</button>
        </form>
        <form>
          <input className="edit-keg-input" placeholder="Edit Beer Name" type="text"/>
          <input className="edit-keg-input" placeholder="Edit Beer Style" type="text"/>
          <input className="edit-keg-input" placeholder="Edit Beer Abbreviation" type="text"/>
          <input className="edit-keg-input" placeholder="Edit Brewery" type="text"/>
          <input className="edit-keg-input" placeholder="Edit Growler Price" type="number"/>
          <br/>
          <button className="button">Done Editing</button>
          <button className="button">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditKegForm;