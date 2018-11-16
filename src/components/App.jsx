import React from 'react';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';
import RemoveKegForm from './RemoveKegForm';
import AddKegForm from './AddKegForm';
import EditKegForm from './EditKegForm';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterKegList: {
        '1': {
          tapId: '1',
          abbreviation: 'Ii',
          growlerPrice: '13',
          beerName: 'Imperial',
          beerStyle: 'IPA',
          brewery: 'Mt. Hood Brewery',
          pintsLeft: '44',
        },
        '2': {
          tapId: '2',
          abbreviation: 'T',
          growlerPrice: '12',
          beerName: 'Tesla',
          beerStyle: 'Coffee Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '100',
        },
        '3': {
          tapId: '3',
          abbreviation: 'Ed',
          growlerPrice: '12',
          beerName: 'Edison',
          beerStyle: 'Amber',
          brewery: 'Bunsenbrewer',
          pintsLeft: '66',
        },
        '4': {
          tapId: '4',
          abbreviation: 'Bc',
          growlerPrice: '13',
          beerName: 'Bright',
          beerStyle: 'Cider',
          brewery: '2 Towns',
          pintsLeft: '100',
        },
        '5': {
          tapId: '5',
          abbreviation: 'Vb',
          growlerPrice: '13',
          beerName: 'von Braun',
          beerStyle: 'Oatmeal Brown',
          brewery: 'Bunsenbrewer',
          pintsLeft: '32',
        },
        '6': {
          tapId: '6',
          abbreviation: 'Oc',
          growlerPrice: '13',
          beerName: 'Old Chub',
          beerStyle: 'Scottish',
          brewery: 'Oskar Blues',
          pintsLeft: '31',
        },
        '7': {
          tapId: '7',
          abbreviation: 'F',
          growlerPrice: '13',
          beerName: 'Fahrenheit',
          beerStyle: 'Belgian Red',
          brewery: 'Bunsenbrewer',
          pintsLeft: '87',
        },
        '8': {
          tapId: '8',
          abbreviation: 'By',
          growlerPrice: '13',
          beerName: 'Byron',
          beerStyle: 'ESB',
          brewery: 'Bunsenbrewer',
          pintsLeft: '47',
        },
        '9': {
          tapId: '9',
          abbreviation: 'G',
          growlerPrice: '13',
          beerName: 'Goodall',
          beerStyle: 'Blonde',
          brewery: 'Bunsenbrewer',
          pintsLeft: '32',
        },
        '10': {
          tapId: '10',
          abbreviation: 'Rc',
          growlerPrice: '13',
          beerName: 'Revival',
          beerStyle: 'Cider',
          brewery: 'Rev Nat\'s',
          pintsLeft: '8',
        },
        '11': {
          tapId: '11',
          abbreviation: 'Bn',
          growlerPrice: '13',
          beerName: 'Bill Nye',
          beerStyle: 'The Science Rye',
          brewery: 'Bunsenbrewer',
          pintsLeft: '100',
        },
        '12': {
          tapId: '12',
          abbreviation: 'Pr',
          growlerPrice: '13',
          beerName: 'Proletariat',
          beerStyle: 'Red',
          brewery: 'Lompoc Brewing',
          pintsLeft: '67',
        },
        '13': {
          tapId: '13',
          abbreviation: 'Hi',
          growlerPrice: '13',
          beerName: 'Hutchins',
          beerStyle: 'Irish Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '121',
        },
        '14': {
          tapId: '14',
          abbreviation: 'Do',
          growlerPrice: '13',
          beerName: 'Dothraki',
          beerStyle: 'CDA',
          brewery: 'Oregon Brew Crew',
          pintsLeft: '31',
        },
        '15': {
          tapId: '15',
          abbreviation: 'Wh',
          growlerPrice: '13',
          beerName: 'White Light',
          beerStyle: 'IPA',
          brewery: 'Bunsenbrewer',
          pintsLeft: '114',
        },
        '16': {
          tapId: '16',
          abbreviation: 'Sd',
          growlerPrice: '13',
          beerName: 'Sun Dazed',
          beerStyle: 'Kolsch',
          brewery: 'Old Town',
          pintsLeft: '24',
        },
        '17': {
          tapId: '17',
          abbreviation: 'Cc',
          growlerPrice: '13',
          beerName: 'Cherry',
          beerStyle: 'Cider',
          brewery: 'Anthem',
          pintsLeft: '84',
        },
        '18': {
          tapId: '18',
          abbreviation: 'Ri',
          growlerPrice: '13',
          beerName: 'RPM',
          beerStyle: 'IPA',
          brewery: 'Boneyard',
          pintsLeft: '23',
        },
        '19': {
          tapId: '19',
          abbreviation: 'He',
          growlerPrice: '13',
          beerName: 'Hefeweizen',
          beerStyle: '',
          brewery: 'Occidental',
          pintsLeft: '99',
        },
        '20': {
          tapId: '20',
          abbreviation: 'Ss',
          growlerPrice: '13',
          beerName: 'Semmelweis',
          beerStyle: 'Sour Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '61',
        },
        '21': {
          tapId: '21',
          abbreviation: 'Aa',
          growlerPrice: '13',
          beerName: 'African',
          beerStyle: 'Amber',
          brewery: 'Mac & Jacks',
          pintsLeft: '56',
        },
        '22': {
          tapId: '22',
          abbreviation: 'C',
          growlerPrice: '13',
          beerName: 'Celsius',
          beerStyle: 'Pale Ale',
          brewery: 'Bunsenbrewer',
          pintsLeft: '98',
        },
        '23': {
          tapId: '23',
          abbreviation: 'Rb',
          growlerPrice: '13',
          beerName: 'Root',
          beerStyle: 'Beer',
          brewery: 'Crater Lake',
          pintsLeft: '34',
        }
      },
      kegSelected: null
    };
    this.handleBeeriodicCellSelection = this.handleBeeriodicCellSelection.bind(this);
  }

  handleBeeriodicCellSelection(tapId) {
    this.setState({kegSelected: tapId});
  }

  render() {
    return(
      <div className="main-container">
        <style jsx global>{`
          * {
            text-align: center;
            font-family: helvetica;
            box-sizing: border-box;
          }
          html {
            font-size: 14px;
            background-color: #fafafa;
          }
          button:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
          .main-container {
            padding: 1rem;
            margin: 0 auto;
            max-width: 86rem;
          }
          .button {
            border-radius: .5rem;
            margin: .5rem;
            font-size: .9em;
            border: none;
            background-color: goldenrod;
            color: saddlebrown;
            padding: .5rem;
            display: inline-block;
          }
          .lower-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-basis: 1;
          }
          .lower-container > div {
              margin-top: 5px;
              background-color: #4A4A4A;
              width: 31%;
              min-width: 20rem;
              line-height: 1.8rem;
              padding: .5rem;
              border-radius: .5rem;
              margin: 0 .5rem;
          }
        `}</style>
        <Header/>
        <BeeriodicGrid keglist={this.state.masterKegList} onBeeriodicCellSelection={this.handleBeeriodicCellSelection}/>
        <div className="lower-container">
          <RemoveKegForm keglist={this.state.masterKegList} kegSelected={this.state.kegSelected}/>
          <AddKegForm keglist={this.state.masterKegList} kegSelected={this.state.kegSelected}/>
          <EditKegForm keglist={this.state.masterKegList} kegSelected={this.state.kegSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
