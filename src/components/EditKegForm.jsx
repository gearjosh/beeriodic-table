import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  let editFormToShow = null;
  if (props.kegSelected != null) {
    const editFormWithKegSelected = <form>
      <style jsx>{`
        .edit-keg-input {
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
        p {
          color: wheat;
        }
        .edit-keg-input {
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
      <p>No Keg Selected</p>
      <input className="edit-keg-input" placeholder="No Beer Name Selected" type="text"/>
      <input className="edit-keg-input" placeholder="No Beer Style Selected" type="text"/>
      <input className="edit-keg-input" placeholder="No Beer Abbreviation Selected" type="text"/>
      <input className="edit-keg-input" placeholder="No Brewery Selected" type="text"/>
      <input className="edit-keg-input" placeholder="No Growler Price Selected" type="number"/>
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
          h2 {
            color: goldenrod;
          }
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
        `}</style>
        <h2>Edit Keg</h2>
        {editFormToShow}
      </div>
    </div>
  );
}

EditKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
};

export default EditKegForm;
