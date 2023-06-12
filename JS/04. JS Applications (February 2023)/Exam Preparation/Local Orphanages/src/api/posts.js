import { get, post, put, del } from "./api.js";

let endpoints = {
  getPosts: "/data/posts?sortBy=_createdOn%20desc",
  getPostById: "/data/posts/",
  createPost: "/data/posts",
  userPosts: (userId) =>
    `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  makeDonation: "/data/donations",
  getTotalDonations: (postId) =>
    `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
  getUserDonations: (postId, userId) =>
    `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllPosts() {
  return await get(endpoints.getPosts);
}

export async function getPostById(id) {
  return await get(endpoints.getPostById + id);
}

export async function deletePostById(id) {
  return await del(endpoints.getPostById + id);
}

export async function updatePostById(id, postData) {
  return await put(endpoints.getPostById + id, postData);
}

export async function createPost(postData) {
  return await post(endpoints.createPost, postData);
}

export async function getUserPosts(userId) {
  return await get(endpoints.userPosts(userId));
}

export async function makeDonation(postId) {
  return await post(endpoints.makeDonation, { postId });
}

export async function getPostDonation(postId) {
  return await get(endpoints.getTotalDonations(postId));
}

export async function getUserPostDonation(postId, userId) {
  return await get(endpoints.getUserDonations(postId, userId));
}
