import { checkUserState, hideSections } from "./utils.js";

export function showHome() {
  hideSections();
  checkUserState();
  document.getElementById("page-home").style.display = "block";
}
