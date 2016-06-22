import alt from '../alt';
import SignupActions from '../actions/SignupActions';

class SignupStore {
  constructor() {
    this.bindActions(SignupActions);
    this.email = 'test@gmail.com';
    this.password = 'asdfasdf1';
    this.firstName = 'test';
    this.lastName = 'test';
    this.city = 'Vancouver';
    this.country = 'ca';
    this.messageData = {};
  };

  onUpdateEmail(event) {
    this.email = event.target.value;
  };

  onUpdatePassword(event) {
    this.password = event.target.value;
    console.log(this.password)
  };

  onUpdateFirstName(event) {
    this.firstName = event.target.value;
  };

  onUpdateLastName(event) {
    this.lastName = event.target.value;
  };

  onUpdateCity(event) {
    this.city = event.target.value;
    console.log(this.city)
  };

  onUpdateCountry(event) {
    this.country = $('#signup-country').val();
  };

  onCreateUserSuccess(data) {
    data.props.history.pushState('/')
  };

  onCreateUserFail(data) {
    console.log(data.history)
    toastr.error(data.message)
  };

};

export default alt.createStore(SignupStore);