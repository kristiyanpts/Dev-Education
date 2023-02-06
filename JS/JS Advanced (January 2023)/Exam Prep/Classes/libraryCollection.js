class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity === 0) {
      throw new Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    this.capacity--;
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    let bookAvailability = this.books.find((b) => b.bookName == bookName);

    if (!bookAvailability) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (bookAvailability.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }
    bookAvailability.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    let bookAvailability = this.books.find((b) => b.bookName == bookName);

    if (!bookAvailability) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (!bookAvailability.payed) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }
    this.books.splice(this.books.indexOf(bookAvailability), 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let output = [];
    if (!bookAuthor) {
      output.push(`The book collection has ${this.capacity} empty spots left.`);
      this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .map((b) =>
          output.push(
            `${b.bookName} == ${b.bookAuthor} - ${
              b.payed ? "Has Paid" : "Not Paid"
            }.`
          )
        );
    } else {
      let authorBooks = [];
      this.books.map((b) => {
        if (b.bookAuthor == bookAuthor) {
          authorBooks.push(b);
        }
      });
      if (authorBooks.length === 0) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
      authorBooks.map((b) =>
        output.push(
          `${b.bookName} == ${b.bookAuthor} - ${
            b.payed ? "Has Paid" : "Not Paid"
          }.`
        )
      );
    }

    return output.join("\n");
  }
}

// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// console.log(library.payBook("In Search of Lost Time"));
// console.log(library.payBook("Don Quixote"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

// const library = new LibraryCollection(2);
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.getStatistics("Miguel de Cervantes"));

const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics("asd"));
