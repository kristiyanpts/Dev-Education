const Hotel = require("../models/Hotel");

exports.getAll = () => {
  return Hotel.find({}).lean();
};

exports.getById = (id) => {
  return Hotel.findById(id).lean();
};

exports.create = async (hotel) => {
  return await Hotel.create(hotel);
};

exports.update = async (id, hotel) => {
  return Hotel.findByIdAndUpdate(id, hotel);
};

exports.deleteById = async (id) => {
  await Hotel.findByIdAndDelete(id);
};

exports.bookRoom = async (hotelId, userId) => {
  const hotel = await Hotel.findById(hotelId);

  if (hotel.bookings.includes(userId)) {
    throw new Error("Cannot book twice");
  }

  hotel.bookings.push(userId);
  await hotel.save();
};

exports.getBookingsByUserId = async (userId) => {
  return (await Hotel.find({ bookings: userId }).lean()).map((h) => h.name);
};
