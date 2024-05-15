const { insertManyLaptops, getLaptops, deleteLaptops } = require("../controllers/laptop");

const laptopRouter = require("express").Router();


laptopRouter.post("/instert-laptops-data", insertManyLaptops);
laptopRouter.get("/", getLaptops);
laptopRouter.delete("/deleteAllLaptops", deleteLaptops);


module.exports = laptopRouter;