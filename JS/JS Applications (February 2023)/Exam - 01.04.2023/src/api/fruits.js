import { get, post, put, del } from "./api.js";

const endpoints = {
  getFruits: "/data/fruits?sortBy=_createdOn%20desc",
  getFruitsById: "/data/fruits/",
  createFruit: "/data/fruits",
  searchFruit: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
};

export async function getAllFruits() {
  return await get(endpoints.getFruits);
}

export async function getFruitById(id) {
  return await get(endpoints.getFruitsById + id);
}

export async function searchFruit(query) {
  return await get(endpoints.searchFruit(query));
}

export async function createFruit(fruitData) {
  return await post(endpoints.createFruit, fruitData);
}

export async function updateFruitById(id, fruitData) {
  return await put(endpoints.getFruitsById + id, fruitData);
}

export async function deleteFruitById(id) {
  return await del(endpoints.getFruitsById + id);
}
