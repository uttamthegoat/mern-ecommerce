const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      maxlength: 10
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
