'use strict';

module.exports = function(app) {
  let contact = require('../controllers/contactController');

  // room List Routes
  
  app.route('/contact')
    .get(contact.allContact) 
    .post(contact.addContact);
    
  app.route('/contact/:contactId')
    .get(contact.singleContact)
    .delete(contact.deleteContact);
};
