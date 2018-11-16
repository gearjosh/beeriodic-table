import React from 'react';

function LegendCell(){
  return (
    <div className="legend-cell">
      <style jsx>{`
        .legend-cell {
          grid-column-start: 7;
          grid-column-end: 8;
          height: 93px;
          width: 93px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #E5E4E3;
          color: #333;
          padding: .125rem;
          margin: auto;
          font-size: .75rem;
        }

        .top-column-legend {
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
          justify-content: space-between;
          align-items: flex-start;
        }
        .tap-number-legend {
          text-align: left;
        }
        .growler-price-legend {
          text-align: right;
        }
        .bottom-column-legend {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 3.75rem;
        }
        .beer-name-legend, .beer-style-legend .brewery-legend {
          display: flex;
          align-items: space-between;
          justify-content: center;
        }

        .brewery-legend {
          font-style: italic;
          font-weight: lighter;
        }

        .abbreviation-legend {
          font-size: 1rem;
          font-weight: bold;
        }
      `}</style>
      <div className="top-column-legend">
        <div className="tap-number-legend">
          Tap #
        </div>
        <div className="abbreviation-legend">

        </div>
        <div className="growler-price-legend">
          $/Growler
        </div>
      </div>
      <div className="bottom-column-legend">
        <div>
          <div className="beer-name-legend">
            Beer Name
          </div>
          <div className="beer-style-legend">
            Beer Style
          </div>
        </div>
        <div className="brewery-legend">
          Brewery
        </div>
      </div>
    </div>
  );
}

export default LegendCell;
