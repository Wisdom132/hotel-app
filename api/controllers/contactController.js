'use strict';

let mongoose = require('mongoose');
let Contact = mongoose.model('Contact');

exports.allContact = function (req, res) {
  Contact.find().exec().then(result=> {
    res.status(200).json(result)
  }).catch(err=> {
    res.status(500).json(err)
  })
};

exports.addContact = (req, res)=> {
  var contact = new Contact({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    phone:req.body.phone,
    email:req.body.email,
    message:req.body.message
  });
  contact.save(function(err, contact) {
   if(err) {
     res.status(500).json({error:'Something Went Wrong'})
   }else {
     res.status(200).json(contact)
   }
}
  )};

exports.deleteContact = function (req, res) {
  let id = req.params.contactId;
  Contact.remove( {
    _id:id
  }).then(result=> {
    res.status(200).json(result)

  }).catch(err => {
    res.status(500).json({error: err})
  })
};

exports.singleContact = function (req, res) {
  Contact.findById(req.params.contactId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
