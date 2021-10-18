const mongoose= require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    providers:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider'
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Client', clientSchema)

