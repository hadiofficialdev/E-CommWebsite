import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartTotalProduct } from "./updateCartTotalProduct";

export const incrementDecrement =function(event,id,stock,price) {
  const currentCardElem=document.querySelector(`#card${id}`);
  
  const productQuantity=currentCardElem.querySelector(".productQuantity");
  const productPrice=currentCardElem.querySelector(".productPrice");

  let quantity=1;
  let LSPrice=0;

  let localCartProduct=getCartProductFromLocalStorage();
  let existingProd=localCartProduct.find((currProd)=> currProd.id ===id);

  if(existingProd) {
    quantity=existingProd.quantity;
    LSPrice=existingProd.price;
  } else {
    LSPrice=price;
    price=price;
  }

  if(event.target.className === "cartIncrement") {
    if(quantity < stock) {
        quantity += 1;
    } else if (quantity === stock) {
        quantity= stock;
        LSPrice= price*stock;
    }
  }
  if(event.target.className === "cartDecrement") {
    if(quantity > 1) {
        quantity -= 1;
    }
  }

  LSPrice= price*quantity;
  LSPrice=Number(LSPrice.toFixed(2).toLocaleString());
  
  let updatedCart={id,quantity,price: LSPrice};
  updatedCart=localCartProduct.map((currProd) => {
    return currProd.id === id ? updatedCart : currProd;
  });

  localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

  productQuantity.textContent=quantity;
  productPrice.textContent=`Rs.${LSPrice.toLocaleString()}`;

  updateCartTotalProduct()
};