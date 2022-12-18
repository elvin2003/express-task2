const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

const product1 = {
  id: 1,
  name: "iPhone 9",
  price: 549,
  amount: 94
}
const product2 = {
  id: 2,
  name: "iPhone X",
  price: 899,
  amount: 129
}
const product3 = {
  id: 3,
  name: "Samsung Universe 9",
  price: 1249,
  amount: 50
}
const product4 = {
  id: 4,
  name: "Huawei P30",
  price: 499,
  amount: 32
}
const product5 = {
  id: 5,
  name: "MacBook Pro",
  price: 1749,
  amount: 83
}
const product6 = {
  id: 6,
  name: "Samsung Galaxy Book",
  price: 1499,
  amount: 50
}
const product7 = {
  id: 7,
  name: "Microsoft Surface Laptop 4",
  price: 1499,
  amount: 102
}
const product8 = {
  id: 8,
  name: "Infinix INBOOK",
  price: 699,
  amount: 201
}
const product9 = {
  id: 9,
  name: "HP Pavilion 15-DK1056WM",
  price: 1099,
  amount: 89
}
const product10 = {
  id: 10,
  name: "Brown Perfume",
  price: 40,
  amount: 52
}

const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

app.get("/", (req, res) => {
  res.send("Go to /product to see products");
})

app.get("/product", (req, res) => {
  res.send(JSON.stringify(products));
})

app.get("/product/:id", (req, res) => {
  for (p in products) {
    if (products[p].id == req.params.id) {
      res.send(JSON.stringify(products[p]));
    }
  }
})

app.listen(PORT, () => {
  console.log("App started on port " + PORT);
});