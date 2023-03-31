import { get, post, put, del } from "./api.js";

const endpoints = {
  getShoes: "/data/shoes?sortBy=_createdOn%20desc",
  getShoesById: "/data/shoes/",
  createShoes: "/data/shoes",
  searchShoes: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
};

export async function getAllShoes() {
  return await get(endpoints.getShoes);
}

export async function getShoesById(id) {
  return await get(endpoints.getShoesById + id);
}

export async function searchShoes(query) {
  return await get(endpoints.searchShoes(query));
}

export async function createShoes(shoeData) {
  return await post(endpoints.createShoes, shoeData);
}

export async function updateShoesById(id, shoeData) {
  return await put(endpoints.getShoesById + id, shoeData);
}

export async function deleteShoesById(id) {
  return await del(endpoints.getShoesById + id);
}
