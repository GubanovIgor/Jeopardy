import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { addCardsAC } from '../redux/actions';
import Category from './Category';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: [],
      loading: false,
    }
  }

  async componentDidMount() {
    const resp = await fetch('http://localhost:3101/getCards');
    const data = await resp.json();
    this.props.addCards(data);
    console.log(this.props.cards[0].questions)
    this.setState({ loading: true });
  }

  render() {
    
    return (
      <Router>
      <div className="App">
        {(this.state.loading) ? <p>{this.props.cards[0].questions[3].q}</p> : <p>Loading...</p>}
        <Category />
      </div>
      </Router>
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
    cards: store.cards
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
