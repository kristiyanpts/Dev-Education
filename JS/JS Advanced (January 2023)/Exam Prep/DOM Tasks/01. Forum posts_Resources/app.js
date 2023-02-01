window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let content = document.getElementById("post-content");
  let buttonPublish = document.getElementById("publish-btn");
  let buttonClear = document.getElementById("clear-btn");
  let reviewList = document.getElementById("review-list");
  let publishedList = document.getElementById("published-list");

  buttonPublish.addEventListener("click", PublishPost);

  function PublishPost(e) {
    e.preventDefault();
    let [title, category] = inputFields.map((e) => `${e.value}`);
    let contentText = content.value;

    if (title == "" || category == "" || content.value == "") {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "rpost");
    li.innerHTML = `<article><h4>${title}</h4><p>Category: ${category}</p><p>Content: ${content.value}</p></article>`;
    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "action-btn edit");
    buttonEdit.textContent = "Edit";
    let buttonApprove = document.createElement("button");
    buttonApprove.setAttribute("class", "action-btn approve");
    buttonApprove.textContent = "Approve";
    buttonEdit.addEventListener("click", EditPost);
    buttonApprove.addEventListener("click", ApprovePost);
    li.appendChild(buttonEdit);
    li.appendChild(buttonApprove);
    reviewList.appendChild(li);
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    content.value = "";

    function EditPost() {
      let inputInfo = [title, category];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      content.value = contentText;
      li.remove();
    }
    function ApprovePost() {
      li.remove();
      buttonEdit.remove();
      buttonApprove.remove();
      publishedList.appendChild(li);
    }

    buttonClear.addEventListener("click", ClearPosts);

    function ClearPosts() {
      publishedList.innerHTML = "";
    }
  }
}
