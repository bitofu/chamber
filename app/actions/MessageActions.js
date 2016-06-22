import alt from '../alt';

class MessageActions {
  constructor() {
    this.generateActions(

    );
  };

  closeMessage() {
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
  };

};

export default alt.createActions(MessageActions);