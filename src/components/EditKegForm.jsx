import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  let editFormToShow = null;
  if (props.kegSelected != null) {
    const editFormWithKegSelected = <form>
      <style jsx>{`
        .edit-keg-input {
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
      <input className="edit-keg-input" placeholder={props.keglist[props.kegSelected].beerName} type="text"/>
      <input className="edit-keg-input" placeholder={props.keglist[props.kegSelected].beerStyle} type="text"/>
      <input className="edit-keg-input" placeholder={props.keglist[props.kegSelected].abbreviation} type="text"/>
      <input className="edit-keg-input" placeholder={props.keglist[props.kegSelected].brewery} type="text"/>
      <input className="edit-keg-input" placeholder={props.keglist[props.kegSelected].growlerPrice} type="number"/>
      <br/>
    <button className="button">Update Keg</button>
      <button className="button">Cancel</button>
    </form>;
    editFormToShow = editFormWithKegSelected;
  } else {
    const editFormNoKegSelected = <form>
      <style jsx>{`
        .edit-keg-input {
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
      <input className="edit-keg-input" placeholder="Edit Beer Name" type="text"/>
      <input className="edit-keg-input" placeholder="Edit Beer Style" type="text"/>
      <input className="edit-keg-input" placeholder="Edit Beer Abbreviation" type="text"/>
      <input className="edit-keg-input" placeholder="Edit Brewery" type="text"/>
      <input className="edit-keg-input" placeholder="Edit Growler Price" type="number"/>
      <br/>
    <button className="button">Update Keg</button>
      <button className="button">Cancel</button>
    </form>;
    editFormToShow = editFormNoKegSelected;
  }
  return (
    <div>
      <div className="edit-area">
        <style jsx>{`
          .edit-area {
            margin-top: 5px;
            background-color: #4A4A4A;
            max-width: 30vw;
            min-width: 20rem;
            line-height: 1.8rem;
            padding: .5rem;
            border-radius: .5rem;
            margin: 0 auto;
          }
          .edit-keg-input {
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
          <input className="edit-keg-input" placeholder="Tap Number" type="number"/>
          <br/>
          <button className="button">Load Keg</button>
        </form>
        {editFormToShow}
      </div>
    </div>
  );
}

EditKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
}

export default EditKegForm;
