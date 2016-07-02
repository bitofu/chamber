import React from 'react';

class Home extends React.Component {
  render() {

    return (
      <div className='ui grid'>
        <div className='two column row'>
          <div className='column'>
            <h2>Home component</h2>
          </div>
          <button className='ui button column'>button</button>
        </div>
      </div>
    );
  };
  
};

export default Home;