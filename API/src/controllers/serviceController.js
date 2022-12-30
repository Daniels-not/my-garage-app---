// External Dependancies
const boom = require("boom");

// Get Data Models
const Service = require("../models/Service");

// Get single service ID
/* A function that is exported to be used in other files. */
exports.getSingleService = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const service = await Service.findById(id);
    return service;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car's services
/* This is a function that is exported to be used in other files. */
exports.getCarsServices = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const services = await Service.find({ car_id: id });
    return services;
  } catch (err) {
    throw boom.boomify(err);
  }
};
