const mongoose = require('mongoose');

const providertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Provider', providertSchema);

