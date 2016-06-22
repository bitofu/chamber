import React from 'react';
import {Link} from 'react-router';
import MessageStore from '../stores/MessageStore';
import MessageActions from '../actions/MessageActions';

class Message extends React.component {
  constructor() {
    super();
    this.state = MessageStore.getState();
    this.onChange = this.onChange.bind(this);
  };

  componentDidMount() {
    MessageStore.listen(this.onChange);
  };

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange);
  };

  onChange(state) {
    this.setState(state);
  };

  render() {
    return(
      <div className='ui message'>
        <i className='close icon' onClick={MessageActions.closeMessage} />
        <div className='header'>
          {this.messageHeader}
        </div>
        <p>{this.messageBody}</p>
      </div>
    );
  };

};

export default Message;