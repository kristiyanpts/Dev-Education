class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function Tickets(tickets: Array<string>, sort: string) {
  let ticketsDatabase: Array<Ticket> = [];
  tickets.forEach((ticket) => {
    let [destination, price, status] = ticket.split("|");
    ticketsDatabase.push(new Ticket(destination, Number(price), status));
  });

  switch (sort) {
    case "price":
      return ticketsDatabase.sort((a, b) => a.price - b.price);
    case "status":
      return ticketsDatabase.sort((a, b) => a.status.localeCompare(b.status));
    case "destination":
      return ticketsDatabase.sort((a, b) =>
        a.destination.localeCompare(b.destination)
      );
    default:
      return ticketsDatabase;
  }
}

console.log(
  Tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
