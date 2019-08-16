import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Items extends Component {
  render() {
    return (
      <div className={'category'}>
      {console.log('ololo', this.props.items[0])}
        {this.props.items[0] ? this.props.items[0].questions.map((el, index) => 
          <Link><Item item={el} index={index}/></Link>) : 'Loading...'
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    items: store.cards
  }
}


export default connect(mapStateToProps)(Items);
