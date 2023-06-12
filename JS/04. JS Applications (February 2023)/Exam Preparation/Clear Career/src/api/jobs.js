import { get, post, put, del } from "./api.js";

const endpoints = {
  getJobs: "/data/offers?sortBy=_createdOn%20desc",
  getJobById: "/data/offers/",
  createJob: "/data/offers",
  applyJob: "/data/applications",
  getJobApplications: (offerId) =>
    `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
  getUserJobApplication: (offerId, userId) =>
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllJobs() {
  return await get(endpoints.getJobs);
}

export async function createJob(jobData) {
  return await post(endpoints.createJob, jobData);
}

export async function getJobById(id) {
  return await get(endpoints.getJobById + id);
}

export async function updateJobById(id, jobData) {
  return await put(endpoints.getJobById + id, jobData);
}

export async function deleteJobById(id) {
  return await del(endpoints.getJobById + id);
}

// Bonus

export async function applyForJob(offerId) {
  return await post(endpoints.applyJob, { offerId });
}

export async function getJobApplications(offerId) {
  return await get(endpoints.getJobApplications(offerId));
}

export async function getUserJobApplications(offerId, userId) {
  return await get(endpoints.getUserJobApplication(offerId, userId));
}
