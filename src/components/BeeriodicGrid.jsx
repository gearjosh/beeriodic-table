import React from 'react';
import { Link } from 'react-router-dom';

import BeeriodicCell from './BeeriodicCell';
import TitleBeeriodic from './TitleBeeriodic';
import TitleTable from './TitleTable';
import LegendCell from './LegendCell';

const state = {
  masterKegList: [
    {
      tapNumber: '1',
      abbreviation: 'Ii',
      growlerPrice: '13',
      beerName: 'Imperial',
      beerStyle: 'IPA',
      brewery: 'Mt. Hood Brewery',
      pintsLeft: '44',
    },
    {
      tapNumber: '2',
      abbreviation: 'T',
      growlerPrice: '12',
      beerName: 'Tesla',
      beerStyle: 'Coffee Stout',
      brewery: 'Bunsenbrewer',
      pintsLeft: '100',
    },
    {
      tapNumber: '3',
      abbreviation: 'Ed',
      growlerPrice: '12',
      beerName: 'Edison',
      beerStyle: 'Amber',
      brewery: 'Bunsenbrewer',
      pintsLeft: '66',
    },
    {
      tapNumber: '4',
      abbreviation: 'Bc',
      growlerPrice: '13',
      beerName: 'Bright',
      beerStyle: 'Cider',
      brewery: '2 Towns',
      pintsLeft: '100',
    },
    {
      tapNumber: '5',
      abbreviation: 'Vb',
      growlerPrice: '13',
      beerName: 'von Braun',
      beerStyle: 'Oatmeal Brown',
      brewery: 'Bunsenbrewer',
      pintsLeft: '32',
    },
    {
      tapNumber: '6',
      abbreviation: 'Oc',
      growlerPrice: '13',
      beerName: 'Old Chub',
      beerStyle: 'Scottish',
      brewery: 'Oskar Blues',
      pintsLeft: '31',
    },
    {
      tapNumber: '7',
      abbreviation: 'F',
      growlerPrice: '13',
      beerName: 'Fahrenheit',
      beerStyle: 'Belgian Red',
      brewery: 'Bunsenbrewer',
      pintsLeft: '87',
    },
    {
      tapNumber: '8',
      abbreviation: 'By',
      growlerPrice: '13',
      beerName: 'Byron',
      beerStyle: 'ESB',
      brewery: 'Bunsenbrewer',
      pintsLeft: '47',
    },
    {
      tapNumber: '9',
      abbreviation: 'G',
      growlerPrice: '13',
      beerName: 'Goodall',
      beerStyle: 'Blonde',
      brewery: 'Bunsenbrewer',
      pintsLeft: '32',
    },
    {
      tapNumber: '10',
      abbreviation: 'Rc',
      growlerPrice: '13',
      beerName: 'Revival',
      beerStyle: 'Cider',
      brewery: 'Rev Nat\'s',
      pintsLeft: '8',
    },
    {
      tapNumber: '11',
      abbreviation: 'Bn',
      growlerPrice: '13',
      beerName: 'Bill Nye',
      beerStyle: 'The Science Rye',
      brewery: 'Bunsenbrewer',
      pintsLeft: '100',
    },
    {
      tapNumber: '12',
      abbreviation: 'Pr',
      growlerPrice: '13',
      beerName: 'Proletariat',
      beerStyle: 'Red',
      brewery: 'Lompoc Brewing',
      pintsLeft: '67',
    },
    {
      tapNumber: '13',
      abbreviation: 'Hi',
      growlerPrice: '13',
      beerName: 'Hutchins',
      beerStyle: 'Irish Stout',
      brewery: 'Bunsenbrewer',
      pintsLeft: '121',
    },
    {
      tapNumber: '14',
      abbreviation: 'Do',
      growlerPrice: '13',
      beerName: 'Dothraki',
      beerStyle: 'CDA',
      brewery: 'Oregon Brew Crew',
      pintsLeft: '31',
    },
    {
      tapNumber: '15',
      abbreviation: 'Wh',
      growlerPrice: '13',
      beerName: 'White Light',
      beerStyle: 'IPA',
      brewery: 'Bunsenbrewer',
      pintsLeft: '114',
    },
    {
      tapNumber: '16',
      abbreviation: 'Sd',
      growlerPrice: '13',
      beerName: 'Sun Dazed',
      beerStyle: 'Kolsch',
      brewery: 'Old Town',
      pintsLeft: '24',
    },
    {
      tapNumber: '17',
      abbreviation: 'Cc',
      growlerPrice: '13',
      beerName: 'Cherry',
      beerStyle: 'Cider',
      brewery: 'Anthem',
      pintsLeft: '84',
    },
    {
      tapNumber: '18',
      abbreviation: 'Ri',
      growlerPrice: '13',
      beerName: 'RPM',
      beerStyle: 'IPA',
      brewery: 'Boneyard',
      pintsLeft: '23',
    },
    {
      tapNumber: '19',
      abbreviation: 'He',
      growlerPrice: '13',
      beerName: 'Hefeweizen',
      beerStyle: '',
      brewery: 'Occidental',
      pintsLeft: '99',
    },
    {
      tapNumber: '20',
      abbreviation: 'Ss',
      growlerPrice: '13',
      beerName: 'Semmelweis',
      beerStyle: 'Sour Stout',
      brewery: 'Bunsenbrewer',
      pintsLeft: '61',
    },
    {
      tapNumber: '21',
      abbreviation: 'Aa',
      growlerPrice: '13',
      beerName: 'African',
      beerStyle: 'Amber',
      brewery: 'Mac & Jacks',
      pintsLeft: '56',
    },
    {
      tapNumber: '22',
      abbreviation: 'C',
      growlerPrice: '13',
      beerName: 'Celsius',
      beerStyle: 'Pale Ale',
      brewery: 'Bunsenbrewer',
      pintsLeft: '98',
    },
    {
      tapNumber: '23',
      abbreviation: 'Rb',
      growlerPrice: '13',
      beerName: 'Root',
      beerStyle: 'Beer',
      brewery: 'Crater Lake',
      pintsLeft: '34',
    },
  ]
};

const kegList = state.masterKegList;

function BeeriodicGrid() {
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
            margin: 0 auto;
          }
        `}</style>
        <TitleBeeriodic/>
        <TitleTable className="subtitle"/>
        <LegendCell/>
        {kegList.map((keg, index) =>
          <BeeriodicCell
            tapNumber={keg.tapNumber}
            abbreviation={keg.abbreviation}
            growlerPrice={keg.growlerPrice}
            beerName={keg.beerName}
            beerStyle={keg.beerStyle}
            brewery={keg.brewery}
            pintsLeft={keg.pintsLeft}
            key={index}/>
        )}
      </div>
      <Link to="/addkeg">
        <button className="button">Add Keg</button>
      </Link>
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      <Link to="/editkeg">
        <button className="button">Edit Keg</button>
      </Link>
    </div>
  );
}

export default BeeriodicGrid;
