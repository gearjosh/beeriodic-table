import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BeeriodicGrid from './BeeriodicGrid';
import AddKegForm from './AddKegForm';
import EditKegForm from './EditKegForm';

class App extends React.Component {

  constructor(){
    this.state = {
      masterKegList: {
        '1': {
          tapNumber: '1',
          abbreviation: 'Ii',
          growlerPrice: '13',
          beerName: 'Imperial',
          beerStyle: 'IPA',
          brewery: 'Mt. Hood Brewery',
          pintsLeft: '44',
        },
        '2': {
          tapNumber: '2',
          abbreviation: 'T',
          growlerPrice: '12',
          beerName: 'Tesla',
          beerStyle: 'Coffee Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '100',
        },
        '3': {
          tapNumber: '3',
          abbreviation: 'Ed',
          growlerPrice: '12',
          beerName: 'Edison',
          beerStyle: 'Amber',
          brewery: 'Bunsenbrewer',
          pintsLeft: '66',
        },
        '4': {
          tapNumber: '4',
          abbreviation: 'Bc',
          growlerPrice: '13',
          beerName: 'Bright',
          beerStyle: 'Cider',
          brewery: '2 Towns',
          pintsLeft: '100',
        },
        '5': {
          tapNumber: '5',
          abbreviation: 'Vb',
          growlerPrice: '13',
          beerName: 'von Braun',
          beerStyle: 'Oatmeal Brown',
          brewery: 'Bunsenbrewer',
          pintsLeft: '32',
        },
        '6': {
          tapNumber: '6',
          abbreviation: 'Oc',
          growlerPrice: '13',
          beerName: 'Old Chub',
          beerStyle: 'Scottish',
          brewery: 'Oskar Blues',
          pintsLeft: '31',
        },
        '7': {
          tapNumber: '7',
          abbreviation: 'F',
          growlerPrice: '13',
          beerName: 'Fahrenheit',
          beerStyle: 'Belgian Red',
          brewery: 'Bunsenbrewer',
          pintsLeft: '87',
        },
        '8': {
          tapNumber: '8',
          abbreviation: 'By',
          growlerPrice: '13',
          beerName: 'Byron',
          beerStyle: 'ESB',
          brewery: 'Bunsenbrewer',
          pintsLeft: '47',
        },
        '9': {
          tapNumber: '9',
          abbreviation: 'G',
          growlerPrice: '13',
          beerName: 'Goodall',
          beerStyle: 'Blonde',
          brewery: 'Bunsenbrewer',
          pintsLeft: '32',
        },
        '10': {
          tapNumber: '10',
          abbreviation: 'Rc',
          growlerPrice: '13',
          beerName: 'Revival',
          beerStyle: 'Cider',
          brewery: 'Rev Nat\'s',
          pintsLeft: '8',
        },
        '11': {
          tapNumber: '11',
          abbreviation: 'Bn',
          growlerPrice: '13',
          beerName: 'Bill Nye',
          beerStyle: 'The Science Rye',
          brewery: 'Bunsenbrewer',
          pintsLeft: '100',
        },
        '12': {
          tapNumber: '12',
          abbreviation: 'Pr',
          growlerPrice: '13',
          beerName: 'Proletariat',
          beerStyle: 'Red',
          brewery: 'Lompoc Brewing',
          pintsLeft: '67',
        },
        '13': {
          tapNumber: '13',
          abbreviation: 'Hi',
          growlerPrice: '13',
          beerName: 'Hutchins',
          beerStyle: 'Irish Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '121',
        },
        '14': {
          tapNumber: '14',
          abbreviation: 'Do',
          growlerPrice: '13',
          beerName: 'Dothraki',
          beerStyle: 'CDA',
          brewery: 'Oregon Brew Crew',
          pintsLeft: '31',
        },
        '15': {
          tapNumber: '15',
          abbreviation: 'Wh',
          growlerPrice: '13',
          beerName: 'White Light',
          beerStyle: 'IPA',
          brewery: 'Bunsenbrewer',
          pintsLeft: '114',
        },
        '16': {
          tapNumber: '16',
          abbreviation: 'Sd',
          growlerPrice: '13',
          beerName: 'Sun Dazed',
          beerStyle: 'Kolsch',
          brewery: 'Old Town',
          pintsLeft: '24',
        },
        '17': {
          tapNumber: '17',
          abbreviation: 'Cc',
          growlerPrice: '13',
          beerName: 'Cherry',
          beerStyle: 'Cider',
          brewery: 'Anthem',
          pintsLeft: '84',
        },
        '18': {
          tapNumber: '18',
          abbreviation: 'Ri',
          growlerPrice: '13',
          beerName: 'RPM',
          beerStyle: 'IPA',
          brewery: 'Boneyard',
          pintsLeft: '23',
        },
        '19': {
          tapNumber: '19',
          abbreviation: 'He',
          growlerPrice: '13',
          beerName: 'Hefeweizen',
          beerStyle: '',
          brewery: 'Occidental',
          pintsLeft: '99',
        },
        '20': {
          tapNumber: '20',
          abbreviation: 'Ss',
          growlerPrice: '13',
          beerName: 'Semmelweis',
          beerStyle: 'Sour Stout',
          brewery: 'Bunsenbrewer',
          pintsLeft: '61',
        },
        '21': {
          tapNumber: '21',
          abbreviation: 'Aa',
          growlerPrice: '13',
          beerName: 'African',
          beerStyle: 'Amber',
          brewery: 'Mac & Jacks',
          pintsLeft: '56',
        },
        '22': {
          tapNumber: '22',
          abbreviation: 'C',
          growlerPrice: '13',
          beerName: 'Celsius',
          beerStyle: 'Pale Ale',
          brewery: 'Bunsenbrewer',
          pintsLeft: '98',
        },
        '23': {
          tapNumber: '23',
          abbreviation: 'Rb',
          growlerPrice: '13',
          beerName: 'Root',
          beerStyle: 'Beer',
          brewery: 'Crater Lake',
          pintsLeft: '34',
        }
      }
    }
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
          .main-container {
            padding: 1rem;
            margin: 0 auto;
            max-width: max-content;
          }
          .button {
            border-radius: 0.5rem;
            margin: 1rem;
            font-size: 0.9em;
            border: none;
            background-color: goldenrod;
            color: saddlebrown;
            padding: 0.5rem;
            display: inline-block;
          }
        `}</style>
        <Header/>
        <BeeriodicGrid/>
        <Switch>
          <Route path="/addkeg" component={AddKegForm}/>
          <Route path="/editkeg" component={EditKegForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
