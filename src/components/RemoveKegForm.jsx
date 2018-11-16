import React from 'react';
import PropTypes from 'prop-types';

function RemoveKegForm(props){
  let removeElementToShow = null;
  // let confirmButtonArea = null;
  // let removeButtonClicked = false;
  const dangerStyle = {
    backgroundColor: 'maroon',
    color: 'wheat'
  };
  const textStyle = {
    color: 'wheat'
  };

  // function toggleConfirm() {
  //   if (removeButtonClicked) {
  //     removeButtonClicked = false;
  //     console.log(removeButtonClicked);
  //   } else {
  //     removeButtonClicked = true;
  //     console.log(removeButtonClicked);
  //   }
  // };

  if (props.kegSelected != null) {
    const removeButtonWithKegSelected = <button style={dangerStyle} /*onClick={toggleConfirm()}*/ className="button">Remove {props.keglist[props.kegSelected].beerName} {props.keglist[props.kegSelected].beerStyle}</button>;
    removeElementToShow = removeButtonWithKegSelected;
  } else {
    const removeTextNoKegSelected = <p style={textStyle}>No Keg Selected</p>;
    removeElementToShow = removeTextNoKegSelected;
  }
  // if (removeButtonClicked === true) {
  //   const confirmButton = <button style={dangerStyle} className="button">Click to remove {props.keglist[props.kegSelected].beerName} {props.keglist[props.kegSelected].beerStyle}</button>;
  //   confirmButtonArea = confirmButton;
  // } else {
  //   confirmButtonArea = null;
  // }

  return (
    <div>
      <style jsx>{`
        h2 {
          color: goldenrod;
        }
        .remove-keg-input {
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
      <h2>Remove Keg</h2>
      {removeElementToShow}
      {/* <br/>
      {confirmButtonArea} */}
    </div>
  );
}

RemoveKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
};

export default RemoveKegForm;
