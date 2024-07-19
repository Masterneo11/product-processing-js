"use strict";
const data = [
  { name: "Laptop", category: "Electronics", price: 1000, quantity: 5, inStock: true, },
  { name: "Phone", category: "Electronics", price: 500, quantity: 0, inStock: false, },
  { name: "Shirt", category: "Apparel", price: 20, quantity: 100, inStock: true, },
  { name: "Jeans", category: "Apparel", price: 40, quantity: 50, inStock: true, },
  { name: "TV", category: "Electronics", price: 1500, quantity: 3, inStock: true, },
  { name: "Hat", category: "Apparel", price: 15, quantity: 200, inStock: true, },
];
document.getElementById("product").addEventListener("click", function () {
  // Process the data when the button is clicked
  const pricetotal = data.filter(item => {
    return item.inStock; // Only get items in stock 
  }).map(item => {
    const name = item.name;
    if (item.category === "Apparel") {
      let discountRate = 0.1;
      const price = item.price * item.quantity;
      const discount = price * discountRate;
      const discountedTotalValue = price - discount;
      return { name, price, discountedTotalValue };
    } else {
      const price = item.price * item.quantity;
      const discountedTotalValue = price;
      return { name, price, discountedTotalValue };
    }
  });
  console.log(pricetotal)
  let result = pricetotal.map(item => {
    return `<dl>
               <div> Name: ${item.name},</div>
               <dl>
               Price: $${item.price},
               Discounted Total: $${item.discountedTotalValue}
               </dl>
            </div>`;
  }).join("");
  document.getElementById("product-outro").innerHTML = result;
});