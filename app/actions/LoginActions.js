import alt from '../alt';

class LoginActions {
  constructor() {
    this.generateActions(
      'updateEmail',
      'updatePassword',
      'loginUserSuccess',
      'loginUserFail'
    );
  };

  loginUser(email, password, props) {
    $.ajax({
      type: 'GET',
      url: '/login',
      data: { email: email, password: password }
    }).done((res) => {
      this.actions.loginUserSuccess({ message: res.responseJSON.message, loggedIn: res.responseJSON.loggedIn, props: props })
    }).fail((res) => {
      this.actions.loginUserFail({ message: res.responseJSON.message, loggedIn: res.responseJSON.loggedIn, props: props })
    });
  };

};

export default alt.createActions(LoginActions);