import React from 'react';
import {Link} from 'react-router';
import auth from '../auth';

class Dashboard extends React.Component {
  render() {
    const token = auth.getToken();

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Hi, the token is: {token}</p>
      </div>
    );
  };

};

export default Dashboard;