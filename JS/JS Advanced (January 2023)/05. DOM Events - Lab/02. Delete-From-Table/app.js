function deleteByEmail() {
  let emails = Array.from(document.querySelectorAll("tbody tr"));
  let emailSearchingFor = document.getElementsByTagName("input")[0].value;
  let foundElem = false;

  for (let i = 0; i < emails.length; i++) {
    if (emails[i].children[1].textContent === emailSearchingFor) {
      foundElem = true;
      emails[i].remove();
    }
  }
  let res = document.getElementById("result");
  foundElem ? (res.innerText = "Deleted.") : (res.innerText = "Not found.");
}
