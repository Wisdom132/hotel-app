'use strict';

let mongoose = require('mongoose');
let Room = mongoose.model('Rooms');

exports.list_all_rooms = function (req, res) {
  Room.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.create_a_room = function(req, res) {
  var new_room = new Room(req.body);
  new_room.save(function(err, task) {
    if (err) res.send(err);
    res.json(task); 
  });
};

exports.delete_a_room = function (req, res) {
  Room.remove({
    _id: req.params.roomId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ task: 'Room successfully deleted' });
  });
};

exports.read_a_room = function (req, res) {
  Room.findById(req.params.roomId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update = function (req, res) {
  Room.findById(req.params.roomId, function (err, room) {
          if (err)
              res.send(err);
     room.first_name=req.body.first_name; 
    room.last_name=req.body.last_name;
    room.email= req.body. email;
    room.phone= req.body.phone;

    room.Address= req.body.Address;
    room.checkin= req.body. checkin;
    room.checkout= req.body.checkout;

    room.people= req.body.people;
    room.room_type=req.body.room_type;
    room.kids= req.body.kids;


  // save the contact and check for errors
          room.save(function (err) {
              if (err)
                  res.json(err);
              res.json({
                  message: 'Room Info updated',
                  data: room
              });
          });
      });
  };



