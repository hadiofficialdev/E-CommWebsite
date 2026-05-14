import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"
import { showToast } from "./showToast";
import { updateCartTotalProduct } from "./updateCartTotalProduct";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart=function(id,name) {
    let cartProducts =getCartProductFromLocalStorage();

    cartProducts=cartProducts.filter((currProd)=> currProd.id !== id );

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv) {
        removeDiv.remove();
        showToast("delete",id,name);
    }
    updateCartValue(cartProducts);

    updateCartTotalProduct();
    
}