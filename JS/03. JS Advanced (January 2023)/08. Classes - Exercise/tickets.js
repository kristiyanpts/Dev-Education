function Main(descriptionArr, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];
  descriptionArr.forEach((d) => {
    let [city, price, status] = d.split("|");
    price = Number(price);
    tickets.push(new Ticket(city, price, status));
  });

  if (criteria === "destination") {
    tickets.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria === "price") {
    tickets.sort((a, b) => a.price - b.price);
  } else if (criteria === "status") {
    tickets.sort((a, b) => a.status.localeCompare(b.status));
  }
  return tickets;
}

console.log(
  JSON.stringify(
    Main(
      [
        "Philadelphia|94.20|available",

        "New York City|95.99|available",

        "New York City|95.99|sold",

        "Boston|126.20|departed",
      ],

      "destination"
    )
  )
);
