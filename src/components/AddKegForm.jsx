import React from 'react';
import PropTypes from 'prop-types';

function AddKegForm(props){
  let _tapId = null;
  let _beerName = null;
  let _beerStyle = null;
  let _abbreviation = null;
  let _brewery = null;
  let _growlerPrice = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewKeg({tapId: _tapId.value, beerName: _beerName.value, beerStyle: _beerStyle.value, abbreviation: _abbreviation.value, brewery: _brewery.value, growlerPrice: _growlerPrice.value, pintsLeft: '124'});
    _tapId.value = '';
    _beerName.value = '';
    _beerStyle.value = '';
    _abbreviation.value = '';
    _brewery.value = '';
    _growlerPrice.value = '';
  }

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
        <input
          ref={(input) => {_tapId = input;}}
          className="add-keg-input"
          placeholder="Tap Number"
          type="text"/>
        <input
          ref={(input) => {_beerName = input;}}
          className="add-keg-input"
          placeholder="Beer Name"
          type="text"/>
        <input
          ref={(input) => {_beerStyle = input;}}
          className="add-keg-input"
          placeholder="Beer Style"
          type="text"/>
        <input
          ref={(input) => {_abbreviation = input;}}
          className="add-keg-input"
          placeholder="Abbreviation"
          type="text"/>
        <input
          ref={(input) => {_brewery = input;}}
          className="add-keg-input"
          placeholder="Brewery"
          type="text"/>
        <input
          ref={(input) => {_growlerPrice = input;}}
          className="add-keg-input"
          placeholder="Growler Price"
          type="number"/>
        <br/>
        <button onClick={handleNewKegFormSubmission} className="button">Add Keg</button>
        <button className="button">Cancel</button>
      </form>
    </div>
  );
}

AddKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string,
  onAddingNewKeg: PropTypes.func
};

export default AddKegForm;
