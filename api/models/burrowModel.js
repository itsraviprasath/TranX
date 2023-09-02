const mongoose = require("mongoose");

const burrowSchema = new mongoose.Schema({
  amount: String,
  interest: Number,
  description: String,
  emi: {
    type: String,
    enum: [`Monthly`, `Quarterly`, `Half-Yearly`, `Yearly`],
  },
  collateral: String,
  street: String,
  landmark: String,
  town: String,
  district: String,
  pincode: Number,
  aadhaar: Number,
  pan: String,
  familyCount: Number,
  occupation: String,
  income: Number,
});

const Burrow = mongoose.model("burrow", burrowSchema);
module.exports = Burrow;
