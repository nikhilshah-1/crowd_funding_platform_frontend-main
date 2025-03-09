const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  targetAmount: Number,
  raisedAmount: { type: Number, default: 0 },
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
