import { get } from "./api.js";

export async function getAllPets() {
  let pets = await get("/data/pets?sortBy=_createdOn%20desc&distinct=name");
  return pets;
}
