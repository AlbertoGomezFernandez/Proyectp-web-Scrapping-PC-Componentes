const Laptop = require("../models/laptop.js");
const laptops = require("../../../laptops.json");


const insertManyLaptops = async (req, res, next) => {
  try {
    console.log(laptops);
    await Laptop.insertMany(laptops);
    return res.status(201).json("Laptops insertadas correctamente");
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
};


const getLaptops = async (req, res, next) => {
  try {
    const laptops = await Laptop.find();
    return res.status(200).json(laptops);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};


const deleteLaptops = async (req, res, next) => {
  try {
    const laptops = await Laptop.deleteMany();
    return res.status(200).json("Portatiles borradas correctamente");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = { insertManyLaptops, getLaptops, deleteLaptops };