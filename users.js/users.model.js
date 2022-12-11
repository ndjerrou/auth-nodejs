const mongoose = require('mongoose');

module.exports = mongoose.model(
  'user',
  mongoose.Schema({
    firstName: {
      type: String,
      max: 15,
      min: [6, 'Firstname must be at least 6 characters, got {VALUE}'],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      max: 20,
      required: true,
      validate: {
        validator(v) {
          return /@/.test(v);
        },
        message: (props) =>
          `The password given ${props} must contain at least one symbol among the following : #, @, !, ?`,
      },
    },
  })
);
