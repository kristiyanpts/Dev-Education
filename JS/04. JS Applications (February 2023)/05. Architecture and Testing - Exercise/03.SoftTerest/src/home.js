import { checkUserState, hideSections } from "./utils.js";
let home = document.getElementById("page-home");
export function showHome() {
  hideSections();
  checkUserState();
  document.querySelector("main").replaceChildren(home);
}
