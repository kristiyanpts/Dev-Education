export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserData() {
  localStorage.removeItem("userData");
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    callback(data);
  };
}
