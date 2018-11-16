import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BeeriodicCell from './BeeriodicCell';
import TitleBeeriodic from './TitleBeeriodic';
import TitleTable from './TitleTable';
import LegendCell from './LegendCell';

function BeeriodicGrid(props) {
  return (
    <div className="grid-container">
      <div className="beeriodic-grid">
        <style jsx>{`
          .grid-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 auto;
            max-width: max-content;
          }
          .beeriodic-grid {
            display: grid;
            grid-auto-flow: dense;
            grid-template: repeat(auto-fill, 124px)/ repeat(9, 124px);
            grid-gap: 1px;
            background-color: #4a4a4a;
            border-radius: .5rem;
            padding: 1rem;
            width: max-content;
            margin: 1rem auto;
          }
        `}</style>
        <TitleBeeriodic/>
        <TitleTable className="subtitle"/>
        <LegendCell/>
        {Object.keys(props.keglist).map((tapId) => {
          let keg = props.keglist[tapId];

          return <BeeriodicCell
            tapId={tapId}
            abbreviation={keg.abbreviation}
            growlerPrice={keg.growlerPrice}
            beerName={keg.beerName}
            beerStyle={keg.beerStyle}
            brewery={keg.brewery}
            pintsLeft={keg.pintsLeft}
            key={tapId}
            onBeeriodicCellSelection={props.onBeeriodicCellSelection}/>;
        })}
      </div>
    </div>
  );
}

BeeriodicGrid.propTypes = {
  onBeeriodicCellSelection: PropTypes.func,
  keglist: PropTypes.object
};

export default BeeriodicGrid;
