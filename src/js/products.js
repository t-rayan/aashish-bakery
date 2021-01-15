import breadImg from "../images/bread.png";
import cookiesImg from "../images/cookie.png";
import pastryImg from "../images/pastry.png";
import puffImg from "../images/puff.png";
import biscuitImg from "../images/biscuits.png";

const productContainer = document.querySelector(".products");
const products = [
  {
    id: 1,
    name: "Loaf of Bread",
    price: "Rs.100",
    imgUrl: breadImg,
  },
  {
    id: 2,
    name: "Cookies",
    price: "Rs.100",
    imgUrl: cookiesImg,
  },
  {
    id: 3,
    name: "Pastry",
    price: "Rs.200",
    imgUrl: pastryImg,
  },
  {
    id: 4,
    name: "Puff Pastry",
    price: "Rs.200",
    imgUrl: puffImg,
  },
  {
    id: 5,
    name: "Bisuits",
    price: "Rs.50",
    imgUrl: biscuitImg,
  },
];

const createProductUI = (name, price, imgUrl) => {
  let productDiv = document.createElement("div");
  productDiv.className = "product";
  let productImg = document.createElement("img");
  productImg.className = "product_img";
  let productName = document.createElement("p");
  productName.className = "product_name";
  let productPrice = document.createElement("p");
  productPrice.className = "price";

  productName.innerHTML = name;
  productPrice.innerHTML = price;
  productImg.src = imgUrl;

  productDiv.appendChild(productImg);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);

  return productDiv;
};
export const loadProducts = () => {
  products.map((p) => {
    productContainer.appendChild(createProductUI(p.name, p.price, p.imgUrl));
  });
};
