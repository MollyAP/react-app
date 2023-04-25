import React from 'react';
import './Code/App.css';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Main from './Parts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import DaBeast from './Parts/DaBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DaBeast: null,
    };
  }

  handleSelectBeast = (beast) => {
    this.setState({ DaBeast: beast });
  };

  handleClose = () => {
    this.setState({ DaBeast: null });
  };


  render() {
    return (
      <div>
        <Header />
        <Main data={data} onSelectBeast={this.handleSelectBeast} />
        <DaBeast
          beast={this.state.DaBeast} // change prop name to "beast"
          handleClose={this.handleClose} // change prop name to "onClose"
        />
        <Footer />
      </div>
    );
  }
}

export default App;