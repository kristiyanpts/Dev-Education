import { get, post, put, del } from "./api.js";

let endpoints = {
  getTheaters: "/data/theaters?sortBy=_createdOn%20desc&distinct=title",
  createTheater: "/data/theaters",
  getTheater: "/data/theaters/",
  getUserTheaters: (userId) =>
    `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  likeTheater: "/data/likes",
  getTotalLikes: (theaterId) =>
    `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
  getUserLike: (theaterId, userId) =>
    `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllTheaters() {
  return await get(endpoints.getTheaters);
}

export async function getTheaterById(id) {
  return await get(endpoints.getTheater + id);
}

export async function createTheater(tData) {
  return await post(endpoints.createTheater, tData);
}

export async function updateTheaterById(id, tData) {
  return await put(endpoints.getTheater + id, tData);
}

export async function deleteTheaterById(id) {
  return await del(endpoints.getTheater + id);
}

export async function getUserTheaters(userId) {
  return await get(endpoints.getUserTheaters(userId));
}

export async function likeTheater(theaterId) {
  return await post(endpoints.likeTheater, { theaterId });
}

export async function getTheaterLikesById(theaterId) {
  return await get(endpoints.getTotalLikes(theaterId));
}

export async function getUserTheaterLikesById(theaterId, userId) {
  return await get(endpoints.getUserLike(theaterId, userId));
}
