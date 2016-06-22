import alt from '../alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.messageHeader = 'Placeholder';
    this.messageBody = 'Placeholder Content';
  };

};

export default alt.createStore(MessageStore);