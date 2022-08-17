const items = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static findAll() {
    return items;
  }

  static search(name) {
    let found = items.find((i) => i.name === name);
    return found;
  }

  static update(name, data) {
    let found = Item.search(name);
    found.name = data.name;
    found.price = data.price;
    return found;
  }

  static remove(name) {
    let found = items.findIndex((n) => n.name === name);
    items.splice(found, 1);
  }
}

module.exports = Item;
