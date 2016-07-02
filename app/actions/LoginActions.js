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

  loginUser(email, password, history) {
    $.ajax({
      type: 'GET',
      url: '/login/new_session',
      data: { email: email, password: password }
    }).done((res) => {
      this.actions.loginUserSuccess({ message: res.responseJSON.message, loggedIn: res.responseJSON.loggedIn, history: history })
    }).fail((res) => {
      this.actions.loginUserFail({ message: res.responseJSON.message, loggedIn: res.responseJSON.loggedIn, history: history })
    });
  };

  popupHide(event) {
    $('#login-popup a').popup('hide');
  };

};

export default alt.createActions(LoginActions);