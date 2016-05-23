import React from 'react';

class App extends React.component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};

export default App;