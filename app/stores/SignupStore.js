import alt from '../alt';
import SignupActions from '../actions/SignupActions';

class SignupStore {
  constructor() {
    this.bindActions(SignupActions);
    this.email = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.country = '';
  };

  onUpdateEmail(event) {
    this.email = event.target.value;
  };

  onUpdatePassword(event) {
    this.password = event.target.value;
  };

  onUpdateFirstName(event) {
    this.firstName = event.target.value;
  };

  onUpdateLastName(event) {
    this.lastName = event.target.value;
  };

  onUpdateCity(event) {
    this.city = event.target.value;
  };

  onUpdateCountry(event) {
    this.country = $('#signup-country').val();
  };

  onCreateUserSuccess(data) {
    toastr.success(data.message);
    data.history.pushState('/');
  };

  onCreateUserFail(data) {
    toastr.error(data.message);
  };

};

export default alt.createStore(SignupStore);