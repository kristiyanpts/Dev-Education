function extensibleObject() {
  let myObj = {
    extend: function (newObj) {
      for (const [key, value] of Object.entries(newObj)) {
        if (typeof value === "function") {
          Object.getPrototypeOf(this)[key] = value;
        } else {
          this[key] = value;
        }
      }
    },
  };

  return myObj;
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};

myObj.extend(template);
console.log(myObj);
