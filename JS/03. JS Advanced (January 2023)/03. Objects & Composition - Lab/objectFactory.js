function factory(library, orders) {
  let arr = [];

  for (const order of orders) {
    let tempObject = Object.assign({}, order.template);
    for (const part of order.parts) {
      tempObject[part] = library[part];
    }

    arr.push(tempObject);
  }

  return arr;
}
