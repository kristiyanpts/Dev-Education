class Bank {
  #bankName;
  constructor(bankName) {
    this.#bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    let isAlrCustomer = this.allCustomers.find(
      (tempCustomer) => tempCustomer.personalId == customer.personalId
    );

    if (isAlrCustomer)
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );

    customer.totalMoney = 0;
    customer.transactions = [];
    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    let isAlrCustomer = this.allCustomers.find(
      (tempCustomer) => tempCustomer.personalId == personalId
    );
    if (!isAlrCustomer) throw new Error(`We have no customer with this ID!`);

    isAlrCustomer.totalMoney += amount;
    isAlrCustomer.transactions.push(
      `${isAlrCustomer.firstName} ${isAlrCustomer.lastName} made deposit of ${amount}$!`
    );
    return `${isAlrCustomer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    let isAlrCustomer = this.allCustomers.find(
      (tempCustomer) => tempCustomer.personalId == personalId
    );
    if (!isAlrCustomer) throw new Error(`We have no customer with this ID!`);
    if (isAlrCustomer.totalMoney < amount)
      throw new Error(
        `${isAlrCustomer.firstName} ${isAlrCustomer.lastName} does not have enough money to withdraw that amount!`
      );

    isAlrCustomer.totalMoney -= amount;
    isAlrCustomer.transactions.push(
      `${isAlrCustomer.firstName} ${isAlrCustomer.lastName} withdrew ${amount}$!`
    );
    return `${isAlrCustomer.totalMoney}$`;
  }

  customerInfo(personalId) {
    let isAlrCustomer = this.allCustomers.find(
      (tempCustomer) => tempCustomer.personalId == personalId
    );
    if (!isAlrCustomer) throw new Error(`We have no customer with this ID!`);
    let output = [
      `Bank name: ${this.#bankName}`,
      `Customer name: ${isAlrCustomer.firstName} ${isAlrCustomer.lastName}`,
      `Customer ID: ${personalId}`,
      `Total Money: ${isAlrCustomer.totalMoney}$`,
      `Transactions:`,
    ];
    isAlrCustomer.transactions.reverse();
    let transcationId = isAlrCustomer.transactions.length;
    isAlrCustomer.transactions.forEach((trans) => {
      output.push(`${transcationId}. ${trans}`);
      transcationId--;
    });
    return output.join("\n");
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
