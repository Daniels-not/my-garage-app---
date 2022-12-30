// External Dependancies
const boom = require("boom");

// Get Data Models
const Owner = require("../models/Owner");
const Car = require("../models/Car");

// Get all owners
/* This is a function that is exporting the getOwner function. It is using the async function to get
all the owners from the Owner model. */
exports.getOwner = async () => {
  try {
    const owners = await Owner.find();
    return owners;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single owner by ID
/* This is a function that is exporting the getSingleOwner function. It is using the async function to
get
a single owner from the Owner model. */
exports.getSingleOwner = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const owner = await Owner.findById(id);
    return owner;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single owner's cars
/* This is a function that is exporting the getOwnersCars function. It is using the async function to
get a single owner's cars from the Car model. */
exports.getOwnersCars = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const cars = await Car.find({ owner_id: id });
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};
