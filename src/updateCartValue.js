const cartValue=document.querySelector("#cartValue");
export const updateCartValue =function(cartProducts) {
     return (cartValue.innerHTML =`<i class="fa-solid fa-cart-shopping">
        </i><span class="cartvalue">${cartProducts.length}</span>`);
};