import React from 'react';
import { connect } from 'react-redux';
import { toggleHiddenAC } from '../redux/actions'
import styles from './Popup.module.css'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className={`${styles.popUp} ${styles.hidden}`}></div>
        <div className={styles.innerPopUp}>
          <h3>Введите свой ответ</h3>
          <div className={styles.inputGroup}>
            <input type="text" aria-describedby="basic-addon1"></input>
            <button onClick={() => this.props.hidden(true)}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hidden: (status) => dispatch(toggleHiddenAC(status))
  }
}


export default connect(null, mapDispatchToProps)(Popup);
