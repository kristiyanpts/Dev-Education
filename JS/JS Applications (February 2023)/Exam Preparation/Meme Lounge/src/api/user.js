import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function loginUser(email, password) {
  let {
    _id,
    email: userEmail,
    accessToken,
    username: userUsername,
  } = await post("/users/login", { email, password });

  setUserData({
    _id,
    email: userEmail,
    accessToken,
    username: userUsername,
  });
}

export async function registerUser(username, email, password, gender) {
  let {
    _id,
    email: userEmail,
    accessToken,
    username: userUsername,
  } = await post("/users/register", { username, email, password, gender });

  setUserData({
    _id,
    email: userEmail,
    accessToken,
    username: userUsername,
  });
}

export async function logoutUser() {
  get("/users/logout");
  clearUserData();
}
