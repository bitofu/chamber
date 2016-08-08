import React from 'react';
import {Link} from 'react-router';

class Dashboard extends React.Component {
  render() {
    const token = ''

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Hi, the token is: {token}</p>
      </div>
    );
  };

};

export default Dashboard;