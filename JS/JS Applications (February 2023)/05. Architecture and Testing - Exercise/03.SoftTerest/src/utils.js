export function hideSections() {
  let sections = Array.from(document.querySelectorAll(".page-section"));
  console.log(sections);
  sections.forEach((s) => (s.style.display = "none"));
}

export function checkUserState() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let userItems = Array.from(document.getElementsByClassName("user"));
  let guestItems = Array.from(document.getElementsByClassName("guest"));
  if (userData != null) {
    userItems.forEach((u) => (u.style.display = "block"));
    guestItems.forEach((g) => (g.style.display = "none"));
  } else {
    userItems.forEach((u) => (u.style.display = "none"));
    guestItems.forEach((g) => (g.style.display = "block"));
  }
}
