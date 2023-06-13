const Auction = require("../models/Auction");

exports.create = async (auctionData) => {
  await Auction.create(auctionData);
};

exports.getAll = () => {
  return Auction.find({}).lean();
};

exports.getById = (id) => {
  return Auction.findById(id).lean();
};

exports.update = async (id, auctionData) => {
  return await Auction.findByIdAndUpdate(id, auctionData);
};

exports.deleteById = async (id) => {
  await Auction.findByIdAndDelete(id);
};

exports.bid = async (auctionId, userId, bidAmount) => {
  let auction = await Auction.findById(auctionId);
  auction.bidder = userId;
  auction.price = bidAmount;
  await auction.save();
};

exports.closeListing = async (id) => {
  let auction = await Auction.findById(id);
  auction.closed = true;
  await auction.save();
};
