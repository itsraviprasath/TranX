const Burrow = require("../models/burrowModel");

const createBurrow = async (req, res) => {
  try {
    const {
      amount,
      interest,
      description,
      emi,
      collateral,
      street,
      landmark,
      town,
      district,
      pincode,
      aadhaar,
      pan,
      familyCount,
      occupation,
      income,
    } = req.body;

    const newBurrow = new Burrow({
      amount,
      interest,
      description,
      emi,
      collateral,
      street,
      landmark,
      town,
      district,
      pincode,
      aadhaar,
      pan,
      familyCount,
      occupation,
      income,
    });
    const savedBurrow = await newBurrow.save();
    res
      .status(201)
      .json(savedBurrow)
      .send({ message: "Burrow Created Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};

const getBurrows = async (req, res) => {
  try {
    const burrows = await Burrow.find({});
    res.status(200).json(burrows);
    console.log(burrows);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = { createBurrow, getBurrows };
