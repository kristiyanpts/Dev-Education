import { get, post, put, del } from "./api.js";

const endpoints = {
  getCars: "/data/cars?sortBy=_createdOn%20desc",
  getCarById: "/data/cars/",
  getUserCars: (userId) =>
    `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  getCarsByYear: (query) => `/data/cars?where=year%3D${query}`,
};

export async function getAllCars() {
  return await get(endpoints.getCars);
}

export async function createCars(carsData) {
  return await post(endpoints.getCarById, carsData);
}

export async function getCarsById(id) {
  return await get(endpoints.getCarById + id);
}

export async function getUserCarsById(userId) {
  return await get(endpoints.getUserCars(userId));
}

export async function getCarsByYear(year) {
  return await get(endpoints.getCarsByYear(year));
}

export async function updateCarsById(id, carsData) {
  return await put(endpoints.getCarById + id, carsData);
}

export async function deleteCarsById(id) {
  return await del(endpoints.getCarById + id);
}
