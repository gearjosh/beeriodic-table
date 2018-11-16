import React from 'react';
import PropTypes from 'prop-types';

function AddRemoveKegForm(props){
  let removeElementToShow = null;
  if (props.kegSelected != null) {
    const dangerStyle = {
      backgroundColor: 'maroon',
      color: 'wheat'
    };
    const removeButtonWithKegSelected = <button style={dangerStyle} className="button">Remove {props.keglist[props.kegSelected].beerName} {props.keglist[props.kegSelected].beerStyle}</button>;
    removeElementToShow = removeButtonWithKegSelected;
  } else {
    const textStyle = {
      color: 'wheat'
    };
    const removeTextNoKegSelected = <p style={textStyle}>No Keg Selected</p>;
    removeElementToShow = removeTextNoKegSelected;
  }
  return (
    <div>
      <div className="add-area">
        <style jsx>{`
          h2 {
            color: goldenrod;
          }
          hr {
            border-color: goldenrod;
          }
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
        <h2>Remove Keg</h2>
        {removeElementToShow}
        <hr/>
        <h2>Add Keg</h2>
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

AddRemoveKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
};

export default AddRemoveKegForm;
