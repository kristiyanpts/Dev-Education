import { get, post, put, del } from "./api.js";

const endpoints = {
  getAlbums: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  getAlbumById: "/data/albums/",
  createAlbum: "/data/albums",
  searchAlbum: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
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

export async function searchAlbum(query) {
  return await get(endpoints.searchAlbum(query));
}
