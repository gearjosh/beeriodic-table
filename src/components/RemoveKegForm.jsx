import React from 'react';
import PropTypes from 'prop-types';

function RemoveKegForm(props){
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
    </div>
  );
}

RemoveKegForm.propTypes = {
  keglist: PropTypes.object,
  kegSelected: PropTypes.string
};

export default RemoveKegForm;
