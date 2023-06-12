import { get, post, put, del } from "./api.js";

const endpoints = {
  getMemes: "/data/memes?sortBy=_createdOn%20desc",
  getMemeById: "/data/memes/",
  createMeme: "/data/memes",
  commentGame: "/data/comments",
  getUserMemes: (userId) =>
    `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllMemes() {
  return await get(endpoints.getMemes);
}

export async function getMemeById(id) {
  return await get(endpoints.getMemeById + id);
}

export async function getUserMemes(userId) {
  return await get(endpoints.getUserMemes(userId));
}

export async function createMeme(memeData) {
  return await post(endpoints.createMeme, memeData);
}

export async function updateMemeById(id, memeData) {
  return await put(endpoints.getMemeById + id, memeData);
}

export async function deleteMemeById(id) {
  return await del(endpoints.getMemeById + id);
}
