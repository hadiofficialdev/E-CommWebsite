import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"

export const updateCartTotalProduct = ()=> {

   let productSubTotal=document.querySelector(".productSubTotal");
   let productFinalTotal=document.querySelector(".productFinalTotal");
   let productTax=document.querySelector(".productTax");


    let localCartProducts =getCartProductFromLocalStorage();
    let initalValue=0;
    let totalproductPrice=localCartProducts.reduce((accum,currElem)=> {
           let productPrice=parseInt(currElem.price) || 0;
           return accum + productPrice;
    },initalValue);

    let tax=localCartProducts.length===0 ? 0 : 100;

    productSubTotal.textContent=`Rs.${totalproductPrice}`;
    productFinalTotal.textContent=`Rs.${totalproductPrice + tax}`;
    productTax.textContent=`Rs.${tax}`;
   
};