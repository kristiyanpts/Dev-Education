function attachEvents() {
  let btnLoadPosts = document.getElementById("btnLoadPosts");
  let posts = document.getElementById("posts");
  let btnViewPost = document.getElementById("btnViewPost");
  let postBody = document.getElementById("post-body");
  let postComments = document.getElementById("post-comments");
  let postTitle = document.getElementById("post-title");

  btnLoadPosts.addEventListener("click", async function (e) {
    let postsResponse = await fetch(
      "http://localhost:3030/jsonstore/blog/posts"
    );
    let postsData = await postsResponse.json();
    for (const [postId, postInfo] of Object.entries(postsData)) {
      let option = document.createElement("option");
      option.value = postId;
      option.textContent = postInfo.title;
      posts.appendChild(option);
    }

    btnViewPost.addEventListener("click", async function () {
      let selectedPost = posts.options[posts.selectedIndex].value;
      let postsCommentsResponse = await fetch(
        `http://localhost:3030/jsonstore/blog/comments`
      );
      let postsCommentsData = await postsCommentsResponse.json();
      postComments.innerHTML = "";

      postTitle.textContent = postsData[selectedPost].title;
      postBody.textContent = postsData[selectedPost].body;

      for (const [commentId, commentInfo] of Object.entries(
        postsCommentsData
      )) {
        if (commentInfo.postId === selectedPost) {
          let li = document.createElement("li");
          li.setAttribute("id", commentId);
          li.textContent = commentInfo.text;
          postComments.appendChild(li);
        }
      }
    });
  });
}

attachEvents();
