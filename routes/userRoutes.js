const express = require("express");

const router = new express.Router();
const Item = require("../items");

router.get("/", (req, res) => {
  res.send({ item: Item.findAll() });
});

router.post("/", (req, res) => {
  newItem = new Item(req.body.name, req.body.price);
  res.json({ item: newItem });
});

router.get("/:name", (req, res) => {
  let found = Item.search(req.params.name);
  res.send({ item: found });
});

router.patch("/:name", (req, res) => {
  let found = Item.update(req.params.name, req.body);
  res.send(found);
});

router.delete("/:name", (req, res) => {
  Item.remove(req.params.name);
  res.json({ message: "Deleted" });
});

// router.get('/:id');

module.exports = router;
