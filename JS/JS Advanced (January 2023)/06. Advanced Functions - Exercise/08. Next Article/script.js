function getArticleGenerator(articles) {
  return () => {
    articles.length > 0
      ? (document.getElementById(
          "content"
        ).innerHTML += `<article>${articles.shift()}</article>`)
      : false;
  };
}
