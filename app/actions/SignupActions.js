import alt from '../alt';

class SignupActions {
  constructor() {
    this.generateActions(
      'updateEmail',
      'updatePassword',
      'updateFirstName',
      'updateLastName',
      'updateCity',
      'updateCountry',
      'createUserSuccess',
      'createUserFail'
    );
  };

  createUser(email, password, firstName, lastName, city, country, history) {
    $.ajax({
      type: 'POST',
      url: '/signup/new_user',
      data: { email: email, password: password, firstName: firstName, lastName: lastName, city: city, country: country }
    }).done((res) => {
        console.log(res)
        this.actions.createUserSuccess({ message: res.message, history: history });
      }).fail((res) => {
        console.log(res)
        this.actions.createUserFail({ message: res.responseJSON.message, history: history });
      });
  };

};

export default alt.createActions(SignupActions);