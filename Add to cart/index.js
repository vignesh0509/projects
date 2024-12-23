// Array of product details
const products = [
  {
    title: "Product 1",
    image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Description of Product 1",
  },
  {
    title: "Product 2",
    image: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description of Product 2",
  },
  {
    title: "Product 3",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description of Product 3",
  },
  {
    title: "Product 4",
    image: "https://images.pexels.com/photos/4276458/pexels-photo-4276458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 4",
  },
  {
    title: "Product 5",
    image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 5",
  },
  {
    title: "Product 6",
    image: "https://images.pexels.com/photos/5895628/pexels-photo-5895628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 6",
  },
  {
    title: "Product 7",
    image: "https://images.pexels.com/photos/14105030/pexels-photo-14105030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 7",
  },
  {
    title: "Product 8",
    image: "https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 8",
  },
  {
    title: "Product 9",
    image: "https://images.pexels.com/photos/6157408/pexels-photo-6157408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 9",
  },
  {
    title: "Product 10",
    image: "https:https://images.pexels.com/photos/6166173/pexels-photo-6166173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load//via.placeholder.com/150",
    description: "Description of Product 10",
  },
  {
    title: "Product 11",
    image: "https://images.pexels.com/photos/17572540/pexels-photo-17572540/free-photo-of-close-up-of-a-luxurious-wristwatch.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 11",
  },
  {
    title: "Product 12",
    image: "https://images.pexels.com/photos/5404641/pexels-photo-5404641.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 12",
  },
  {
    title: "Product 13",
    image: "https://images.pexels.com/photos/10488980/pexels-photo-10488980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 13",
  },
  {
    title: "Product 14",
    image: "https://images.pexels.com/photos/3083461/pexels-photo-3083461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of Product 14",
  },
];

const cardContainer = document.getElementById("card-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <button id="cartbtn">Add to Cart</button>
  `;

  // Append the card to the container
  cardContainer.appendChild(card);
});

let count = 0;
const countvalue = document.getElementById("count");
const buttons = document.querySelectorAll("button#cartbtn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    countvalue.textContent = count;
  });
});
