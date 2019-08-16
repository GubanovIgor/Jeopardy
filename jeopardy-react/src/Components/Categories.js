import React, {Component} from 'react';
import {connect} from 'react-redux'

import Items from './Items'
class Category extends Component {
    render() {
        const { card, index } = this.props;
        return (
            <div className="Category">
                {card.title} {<Items/>}
            </div>
        );
    }
}


class Categories extends Component {
  render() {
    return (
      <div className="App">
        {this.props.cards.map((card, i) =>
          <Category card={card} key={i}/>
          )}
      </div>
    );
  }
}
// Без redux
// export default TodoList;

// С redux
function mapStateToProps(store) {
  return {
    cards: store.cards
  }
}

export default connect(mapStateToProps)(Categories)