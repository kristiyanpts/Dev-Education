import { html, render } from "../lib.js";
let notifSection = document.querySelector("#notifications");

let notificationTemplate = (message) => html`
  <div id="errorBox" class="notification">
    <span>${message}</span>
  </div>
`;

export function showNotification(message) {
  render(notificationTemplate(message), notifSection);
  let notifClass = document.querySelector(".notification");
  notifClass.style.display = "block";
  setTimeout(() => {
    notifClass.style.display = "none";
  }, 3000);
}
