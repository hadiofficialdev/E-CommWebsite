import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();

export const addToCart=function(event,id,stock,name) {
    let arrLocalStorageProduct= getCartProductFromLocalStorage();
     
    const currCard=document.querySelector(`#card${id}`);

    let quantity=currCard.querySelector(".productQuantity").innerText;
    let price=currCard.querySelector(".productPrice").innerText;

    price=price.replace("Rs.","");
    

    let existingProd=arrLocalStorageProduct.find(function(currprod) {
        return currprod.id === id;
    });

    if(existingProd && quantity > 1) {
        quantity=Number(existingProd.quantity) + Number(quantity);
        price=Number(price*quantity);
        let updatedCart={id,quantity,price};

        updatedCart=arrLocalStorageProduct.map((currProd)=> {
            return (currProd.id === id) ? updatedCart : currProd;  
        
        });
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
        showToast("add",id,name);
    }

    if(existingProd) {
       return false;
    }
    price=Number(quantity*price);
    quantity=Number(quantity);

    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    //cartbutton update
    updateCartValue(arrLocalStorageProduct);

    showToast("add",id,name);
}