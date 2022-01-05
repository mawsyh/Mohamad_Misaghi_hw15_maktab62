const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validatePassword: {
      validator: function(v) {
        return v.match(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/);
      },
    }
  },
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  gender: {
    type: String,
    default: 'Male',
  },
});

module.exports = mongoose.model("users", productSchema);
