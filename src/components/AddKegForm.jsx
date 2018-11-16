import React from 'react';
import PropTypes from 'prop-types';

function AddKegForm(props){
  return (
    <div>
      <style jsx>{`
        h2 {
          color: goldenrod;
        }
        .add-keg-input {
          width: 90%;
          margin: .25rem;
          height: 2rem;
          font-size: 1rem;
          background-color: #fafafa;
          border: none;
          border-radius: .25rem;
          outline-color: goldenrod;
        }
      `}</style>
      <h2>Add Keg</h2>
      <form>
        <input className="add-keg-input" placeholder="Tap Number" type="text"/>
        <input className="add-keg-input" placeholder="Beer Name" type="text"/>
        <input className="add-keg-input" placeholder="Beer Style" type="text"/>
        <input className="add-keg-input" placeholder="Abbreviation" type="text"/>
        <input className="add-keg-input" placeholder="Brewery" type="text"/>
        <input className="add-keg-input" placeholder="Growler Price" type="number"/>
        <br/>
        <button className="button">Add Keg</button>
        <button className="button">Cancel</button>
      </form>
    </div>
  );
}

AddKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
};

export default AddKegForm;
