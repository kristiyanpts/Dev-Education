class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }

    let isRegistered = this.listOfArticles.find(
      (a) => a.articleName == articleName
    );

    if (isRegistered && isRegistered.articleModel === articleModel) {
      isRegistered.quantity += quantity;
    } else {
      this.listOfArticles.push({
        articleModel,
        articleName,
        quantity,
      });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let isGuest = this.guests.find((a) => a.guestName == guestName);

    if (isGuest) {
      throw new Error(`${guestName} has already been invited.`);
    }
    let points = 0;
    if (personality === "Vip") {
      points = 500;
    } else if (personality === "Middle") {
      points = 250;
    } else {
      points = 50;
    }
    this.guests.push({
      guestName,
      points,
      purchaseArticle: 0,
    });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    articleModel = articleModel.toLowerCase();
    let isRegistered = this.listOfArticles.find(
      (a) => a.articleName == articleName
    );
    let isGuest = this.guests.find((a) => a.guestName == guestName);

    if (!isRegistered || isRegistered.articleModel !== articleModel) {
      throw new Error("This article is not found.");
    }
    if (isRegistered.quantity === 0) {
      return `The ${articleName} is not available.`;
    }
    if (!isGuest) {
      return "This guest is not invited.";
    }

    if (isGuest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    } else {
      isGuest.points -= this.possibleArticles[articleModel];
      isRegistered.quantity--;
      isGuest.purchaseArticle++;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
  }

  showGalleryInfo(criteria) {
    let output = [];
    if (criteria === "article") {
      output.push("Articles information:");
      this.listOfArticles.map((a) =>
        output.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`)
      );
    } else {
      output.push("Guests information:");
      this.guests.map((g) =>
        output.push(`${g.guestName} - ${g.purchaseArticle}`)
      );
    }

    return output.join("\n");
  }
}

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.addArticle("picture", "Mona Liza", 3));
// console.log(artGallery.addArticle("Item", "Ancient vase", 2));
// console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
// console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
