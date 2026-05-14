import "./style.css";
import "./darktheme.js";
import products from "./api/products.json";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartTotalProduct } from "./updateCartTotalProduct.js";

let cartProducts= getCartProductFromLocalStorage();

let filterProducts=products.filter((currProd)=>{
return cartProducts.some((currElem) => currElem.id === currProd.id);
});

//display
const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCardTemplate");

const showCartProducts = ()=> {
    filterProducts.forEach((currProd)=> {
       
        const {category,id,image,name,stock,price}=currProd;

        let productClone =document.importNode(templateContainer.content,true);
        
        const lSActualData= fetchQuantityFromCartLS(id,price);


        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent=`Rs.${Number(lSActualData.price).toLocaleString()}`;
        
        productClone.querySelector(".stockContainer").addEventListener("click",(event)=>{
           incrementDecrement(event,id,stock,price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=> removeProdFromCart(id,name));

        cartElement.append(productClone);
    });
};

showCartProducts();

updateCartTotalProduct();