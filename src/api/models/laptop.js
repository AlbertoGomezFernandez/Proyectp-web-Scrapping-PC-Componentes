const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "laptops",
  }
);

const Laptop = mongoose.model("laptops", laptopSchema, "laptops");
module.exports = Laptop;