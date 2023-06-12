import { get, post, put, del } from "./api.js";

const endpoints = {
  getAlbums: "/data/albums?sortBy=_createdOn%20desc",
  getAlbumById: "/data/albums/",
  createAlbum: "/data/albums",
  likeAlbum: `/data/likes`,
  getAlbumLikes: (albumId) =>
    `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
  getUserAlbumLikes: (albumId, userId) =>
    `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllAlbums() {
  return await get(endpoints.getAlbums);
}

export async function getAlbumById(id) {
  return await get(endpoints.getAlbumById + id);
}

export async function createAlbum(alData) {
  return await post(endpoints.createAlbum, alData);
}

export async function updateAlbumById(id, alData) {
  return await put(endpoints.getAlbumById + id, alData);
}

export async function deleteAlbumById(id) {
  return await del(endpoints.getAlbumById + id);
}

export async function likeAlbum(albumId) {
  return await post(endpoints.likeAlbum, { albumId });
}

export async function getAlbumLikes(albumId) {
  return await get(endpoints.getAlbumLikes(albumId));
}

export async function getUserAlbumLikes(albumId, userId) {
  return await get(endpoints.getUserAlbumLikes(albumId, userId));
}
