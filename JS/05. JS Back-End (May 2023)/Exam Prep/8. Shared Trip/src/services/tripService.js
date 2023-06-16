const Trip = require("../models/Trip");
const User = require("../models/User");

exports.create = async (tripData, userId) => {
  let trip = await Trip.create(tripData);
  let user = await User.findById(userId);
  user.trips.push(trip._id);
  await user.save();
};

exports.getAll = () => {
  return Trip.find({}).lean();
};

exports.getById = (id) => {
  return Trip.findById(id).lean();
};

exports.update = async (id, tripData) => {
  return await Trip.findByIdAndUpdate(id, tripData, { runValidators: true });
};

exports.deleteById = async (id) => {
  await Trip.findByIdAndDelete(id);
};

exports.joinTrip = async (tripId, userId) => {
  let trip = await Trip.findById(tripId);
  trip.buddies.push(userId);
  trip.seats--;
  await trip.save();
};

// exports.getUserWishlist = async (userId) => {
//   return await Trip.find({ wishlist: userId }).lean();
// };
