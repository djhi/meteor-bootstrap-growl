// Default options for bootstrap-growl 
var defaults = {
  ele: 'body', // which element to append to
  type: 'info', // (null, 'info', 'error', 'success')
  offset: {
    from: 'top',
    amount: 20
  }, // 'top', or 'bottom'
  align: 'center', // ('left', 'right', or 'center')
  width: 512, // (integer, or 'auto')
  delay: 4000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
  allow_dismiss: true, // If true then will display a cross to close the popup.
  stackup_spacing: 10, // spacing between consecutively stacked growls.
  autoshrink: true
};

NotificationsHelper = {
  error: function(error, options) {
    var message = error;
    if (typeof error.invalidKeys === 'undefined') {
      if (error.reason) {
        message = error.reason;
      } else {
        message = error.message;
      }
    } else {
      message = "Veuillez corriger les erreurs signalées en rouge";
    }

    var opts = _.extend({}, defaults, {
      type: 'danger',
      delay: 0
    }, options);

    $.bootstrapGrowl(message, opts);
  },

  warning: function(message, options) {
    var opts = _.extend({}, defaults, {
      type: 'warning'
    }, options);

    $.bootstrapGrowl(message, opts);
  },

  info: function(message, options) {
    var opts = _.extend({}, defaults, {
      type: 'info'
    }, options);

    $.bootstrapGrowl(message, opts);
  },

  success: function(message, options) {
    var opts = _.extend({}, defaults, {
      type: 'success'
    }, options);

    $.bootstrapGrowl(message, opts);
  }
};
