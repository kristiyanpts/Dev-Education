import { get, post, put, del } from "./api.js";

const endpoints = {
  getBooks: "/data/books?sortBy=_createdOn%20desc",
  getBookById: "/data/books/",
  getUserBooks: (userId) =>
    `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  createBook: "/data/books",
  likeBook: "/data/likes",
  getBookLikes: (bookId) =>
    `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
  getUserBookLikes: (bookId, userId) =>
    `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllBooks() {
  return await get(endpoints.getBooks);
}

export async function getAllUserBooks(userId) {
  return await get(endpoints.getUserBooks(userId));
}

export async function getBookById(id) {
  return await get(endpoints.getBookById + id);
}

export async function createBook(bookData) {
  return await post(endpoints.createBook, bookData);
}

export async function updateBookById(id, bookData) {
  return await put(endpoints.getBookById + id, bookData);
}

export async function deleteBookById(id) {
  return await del(endpoints.getBookById + id);
}

export async function likeBook(bookId) {
  return await post(endpoints.likeBook, { bookId });
}

export async function getBooksLikes(bookId) {
  return await get(endpoints.getBookLikes(bookId));
}

export async function getUserBookLikes(bookId, userId) {
  return await get(endpoints.getUserBookLikes(bookId, userId));
}
