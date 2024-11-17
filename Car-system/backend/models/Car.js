

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarSchema = new mongoose.Schema(
  {
    userId:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title:       { type: String, required: true },
    description: { type: String, required: true },
    images:      [{ type: String }], // Array of image URLs
    tags:        [{ type: String }],
  },
  { timestamps: true }
);

CarSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Car', CarSchema);
