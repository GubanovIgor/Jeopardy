import React from 'react';
import { connect } from 'react-redux';
import { addCardsAC } from '../redux/actions'
import Popup from './Popup'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: [],
      // loading: false,
    }
  }

  async componentDidMount() {
    const resp = await fetch('http://localhost:3101/getCards');
    const data = await resp.json();
    this.props.addCards(data);
    console.log(this.props.cards)
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="App">
        {(this.props.cards[0]) ? <p>{this.props.cards[0].questions[3].q}</p> : <p>Loading...</p>}
        {(!this.props.popupCheck) ? <Popup /> : <p>нет popup</p>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCards: (data) => dispatch(addCardsAC(data))
  }
}

function mapStateToProps(store) {
  return {
    cards: store.cards,
    popupCheck: store.popupCheck,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
