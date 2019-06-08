'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoomSchema = new Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  Address: {
    type: String,
    required: false
  },
  checkin: {
    type: String,
    required: false
  },
   checkout: {
    type: String,
    required: false
  },
  people: {
    type: Number,
      required: false
  },
  kids: {
    type: Number,
      required: false
  },
  room_type: {
    type: String,
      required: false
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Rooms', RoomSchema);