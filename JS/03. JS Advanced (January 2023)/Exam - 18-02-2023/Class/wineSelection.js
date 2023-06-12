class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space < 1) throw new Error("Not enough space in the cellar.");
    this.wines.push({ wineName, wineType, price, paid: false });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    let isWineAvai = this.wines.find((wine) => wine.wineName == wineName);
    if (!isWineAvai) throw new Error(`${wineName} is not in the cellar.`);
    if (isWineAvai.paid) throw new Error(`${wineName} has already been paid.`);
    isWineAvai.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    let isWineAvai = this.wines.find((wine) => wine.wineName == wineName);
    if (!isWineAvai)
      throw new Error("The wine, you're looking for, is not found.");
    if (!isWineAvai.paid)
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    this.wines.splice(this.wines.indexOf(isWineAvai), 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    let output = [];
    if (!wineType) {
      output = [
        `You have space for ${this.space} bottles more.`,
        `You paid ${this.bill}$ for the wine.`,
      ];
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map((wine) =>
          output.push(
            `${wine.wineName} > ${wine.wineType} - ${
              wine.paid ? "Has Paid" : "Not Paid"
            }.`
          )
        );
    } else {
      let isWineAvai = this.wines.find((wine) => wine.wineType == wineType);
      if (!isWineAvai)
        throw new Error(`There is no ${wineType} in the cellar.`);
      output.push(
        `${isWineAvai.wineName} > ${isWineAvai.wineType} - ${
          isWineAvai.paid ? "Has Paid" : "Not Paid"
        }.`
      );
    }

    return output.join("\n");
  }
}

let selection = null;

// selection = new WineSelection(2);
// console.log(
//   selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50)
// );
// console.log(
//   selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120)
// );
// console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));

// selection = new WineSelection(2);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// console.log(selection.payWineBottle("Sauvignon Blanc Marlborough", 120));
// console.log(selection.payWineBottle("Bodegas Godelia Mencía", 144));

// selection = new WineSelection(2);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
// selection.payWineBottle("Sauvignon Blanc Marlborough", 50);
// console.log(selection.openBottle("Sauvignon Blanc Marlborough"));
// console.log(selection.openBottle("Cabernet Sauvignon Napa Valley"));

// selection = new WineSelection(2);
// console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
// console.log(selection.cellarRevision("Rose"));

selection = new WineSelection(5);
selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);
selection.payWineBottle("Bodegas Godelia Mencía", 144);
selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
console.log(selection.cellarRevision());
