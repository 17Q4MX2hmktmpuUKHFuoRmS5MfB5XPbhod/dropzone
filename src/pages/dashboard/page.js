import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';

import NavMain from '../../common/components/NavMain';

export default class DashboardPage extends React.Component {
  signUp() {
    browserHistory.push('#/home');
  }
  
  render() {
    return (
      <NavMain activePage="dashboard">
        <h1 className={styles.heading}>Dashboard</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Get it did</button>
      </NavMain>
    );
  }
}
