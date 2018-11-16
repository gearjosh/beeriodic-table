import React from 'react';
import PropTypes from 'prop-types';

function BeeriodicCell(props){
  return (
    <div className="beeriodic-cell"
      onClick={() => {props.onBeeriodicCellSelection(props.tapId)}}>
      <style jsx>{`
        .beeriodic-cell {
          height: 124px;
          width: 124px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #E5E4E3;
          color: #333;
          padding: .5rem;
        }
        .top-column {
          padding: .125rem;
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
          justify-content: space-between;
          align-items: flex-start;
        }
        .tap-number {
          text-align: left;
        }
        .growler-price {
          text-align: right;
        }
        .bottom-column {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 5rem;
        }
        .beer-name, .beer-style .brewery {
          display: flex;
          align-items: space-between;
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
      <div className="bottom-column">
        <div>
          <div className="beer-name">
            {props.beerName}
          </div>
          <div className="beer-style">
            {props.beerStyle}
          </div>
        </div>
        <div className="brewery">
          {props.brewery}
        </div>
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
  pintsLeft: PropTypes.string,
  onBeeriodicCellSelection: PropTypes.func
};

export default BeeriodicCell;
