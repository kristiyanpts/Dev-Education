import { get, post, put, del } from "./api.js";

const endpoints = {
  getGames: "/data/games?sortBy=_createdOn%20desc",
  getRecentGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  getGameById: "/data/games/",
  createGame: "/data/games",
  commentGame: "/data/comments",
  getGameComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
};

export async function getAllGames() {
  return await get(endpoints.getGames);
}

export async function getAllRecentGames() {
  return await get(endpoints.getRecentGames);
}

export async function createGame(gameData) {
  return await post(endpoints.createGame, gameData);
}

export async function getGameById(id) {
  return await get(endpoints.getGameById + id);
}

export async function updateGameById(id, gameData) {
  return await put(endpoints.getGameById + id, gameData);
}

export async function deleteGameById(id) {
  return await del(endpoints.getGameById + id);
}

// Bonus

export async function commentGame(gameId, comment) {
  return await post(endpoints.commentGame, { gameId, comment });
}

export async function getGameComments(gameId) {
  return await get(endpoints.getGameComments(gameId));
}
