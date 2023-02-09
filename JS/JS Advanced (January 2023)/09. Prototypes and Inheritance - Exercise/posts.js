function solution() {
  class Post {
    constructor(title, content) {
      this.postTitle = title;
      this.postContent = content;
    }

    toString() {
      let output = [];
      output.push(`Post: ${this.postTitle}`);
      output.push(`Content: ${this.postContent}`);
      return output.join("\n");
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let output = [];
      output.push(`Rating: ${this.likes - this.dislikes}`);
      if (this.comments.length > 0) {
        output.push(`Comments:`);
        this.comments.forEach((c) => output.push(` * ${c}`));
      }
      super.toString();
      return super.toString() + "\n" + output.join("\n");
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
    }

    toString() {
      return super.toString() + "\n" + `Views: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}
const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post

// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle

// Content: TestContent

// Rating: -5

// Comments:

// * Good post

// * Very good post

// * Wow!
