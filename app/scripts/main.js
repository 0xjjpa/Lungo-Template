'use strict';
(function(Lungo){
Lungo.init({
  name: 'example'
});

function loadNotification() {
 var confirmOptions = {
  icon: 'user',
  title: 'Check In',
  description: 'Would you like to check in now?',
  accept: {
    icon: 'checkmark',
    label: 'Yes',
    callback: function() {console.log('ACCEPT');}
  },
  cancel:  {
    icon: 'close',
    label: 'No',
    callback: function() {console.log('CANCEL');}
  }
};
  Lungo.Notification.confirm(confirmOptions);
}

document.getElementById('notification').addEventListener('click', loadNotification);
})(window.Lungo);