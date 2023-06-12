import { get, post } from "./api/api.js";

export async function donateToPet(petId) {
  await post("/data/donation", { petId });
}

export async function getTotalDonation(petId) {
  return await get(
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
}

export async function getUserDonation(petId, userId) {
  return await get(
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
