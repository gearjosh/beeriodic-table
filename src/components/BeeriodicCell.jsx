import React from 'react';
import PropTypes from 'prop-types';

function BeeriodicCell(props){
  return (
    <div className="beeriodic-cell">
      <style jsx>{`
        .beeriodic-cell {
          height: 125px;
          width: 125px;
          display:flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .top-columns{
          padding: 4px;
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
          justify-content: space-between;
        }
        
        .tap-number, .growler-price {
          width: 35px;
        }
        
        .tap-number {
          text-align: left;
        }
        
        .growler-price {
          text-align: right;
        }
        
        .beer-name, .beer-style .brewery {
          display: flex;
          padding: 8px;
          justify-content: center;
        }
        
        .brewery {
          font-style: italic;
          font-weight: lighter;
        }
        
        .abbreviation {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
      <div className="top-column">
        <div className="tap-number">
          {props.tapNumber}
        </div>
        <div className="abbreviation">
          {props.abbreviation}
        </div>
        <div className="growler-price">
          {props.growlerPrice}
        </div>
      </div>
      <div className="beer-name">
        {props.beerName}
      </div>
      <div className="beer-style">
        {props.beerStyle}
      </div>
      <div className="brewery">
        {props.brewery}
      </div>
    </div>
  );
}

BeeriodicCell.propTypes = {
  tapNumber: PropTypes.string,
  abbreviation: PropTypes.string,
  growlerPrice: PropTypes.string,
  beerName: PropTypes.string,
  beerStyle: PropTypes.string,
  brewery: PropTypes.string,
  pintsLeft: PropTypes.string
};

export default BeeriodicCell;