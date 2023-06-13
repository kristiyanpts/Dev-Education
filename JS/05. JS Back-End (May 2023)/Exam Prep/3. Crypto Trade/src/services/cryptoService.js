const Crypto = require("../models/Crypto");

exports.create = async (cryptoData) => {
  await Crypto.create(cryptoData);
};

exports.getAll = () => {
  return Crypto.find({}).lean();
};

exports.getById = (id) => {
  return Crypto.findById(id).lean();
};

exports.update = async (id, cryptoData) => {
  return await Crypto.findByIdAndUpdate(id, cryptoData);
};

exports.deleteById = async (id) => {
  await Crypto.findByIdAndDelete(id);
};

exports.buy = async (cryptoId, userId) => {
  let crypto = await Crypto.findById(cryptoId);
  crypto.bought.push(userId);
  await crypto.save();
};

exports.search = async (nameQuery, paymentMethodQuery) => {
  let cryptos = await Crypto.find({}).lean();

  if (nameQuery) {
    cryptos = cryptos.filter((c) =>
      c.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
  }

  if (paymentMethodQuery) {
    cryptos = cryptos.filter((c) => c.paymentMethod === paymentMethodQuery);
  }

  return cryptos;
};
