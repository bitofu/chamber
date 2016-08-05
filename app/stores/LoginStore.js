import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.email = '';
    this.password = '';
  };

  onUpdateEmail(event) {
    this.email = event.target.value;
  };

  onUpdatePassword(event) {
    this.password = event.target.value;
  }

  onLoginUserSuccess(data) {
    // data.props.history.pushState('/')
    console.log(data.loggedIn)
  };

  onLoginUserFail(data) {
    // this.messageData = { type: 'error', header: 'There was an error in your registration.', content: data.message };
    console.log(data.loggedIn)
  };

};

export default alt.createStore(LoginStore);