import React from 'react';

function AddRemoveKegForm(){
  return (
    <div>
      <div className="add-area">
        <style jsx>{`
          .add-area {
            margin-top: 5px;
            background-color: #4A4A4A;
            max-width: 30vw;
            min-width: 20rem;
            line-height: 1.8rem;
            padding: .5rem;
            border-radius: .5rem;
            margin: 0 auto;
          }
          .add-remove-keg-input {
            width: 90%;
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
          <input className="add-remove-keg-input" placeholder="Tap Number"/>
          <br/>
          <button className="button">Remove Keg</button>
        </form>
        <form>
          <input className="add-remove-keg-input" placeholder="Tap Number" type="text"/>
          <input className="add-remove-keg-input" placeholder="Beer Name" type="text"/>
          <input className="add-remove-keg-input" placeholder="Beer Style" type="text"/>
          <input className="add-remove-keg-input" placeholder="Abbreviation" type="text"/>
          <input className="add-remove-keg-input" placeholder="Brewery" type="text"/>
          <input className="add-remove-keg-input" placeholder="Growler Price" type="number"/>
          <br/>
          <button className="button">Add Keg</button>
          <button className="button">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddRemoveKegForm;
