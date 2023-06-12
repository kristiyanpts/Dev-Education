const Photo = require("../models/Photo");

exports.create = async (photoData) => {
  await Photo.create(photoData);
};

exports.getAll = () => {
  return Photo.find({}).lean();
};

exports.getById = (id) => {
  return Photo.findById(id).lean();
};

exports.update = async (id, photoData) => {
  return await Photo.findByIdAndUpdate(id, photoData);
};

exports.deleteById = async (id) => {
  await Photo.findByIdAndDelete(id);
};

exports.comment = async (photoId, userId, comment) => {
  let photo = await Photo.findById(photoId);
  let commentData = { userId, comment };
  photo.commentList.push(commentData);
  await photo.save();
};

exports.getPostComments = async (id) => {
  return await Photo.findById(id)
    .lean()
    .populate("commentList.userId")
    .populate("owner");
};

exports.getUserPosts = async (id) => {
  return await Photo.find({ owner: id }).lean();
};
