import { CartState } from "../redux/slices/cartSlice";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');

    let cart: CartState;
    data ? cart = JSON.parse(data): cart = {items :[], totalPrice: 0};

    return {
        items: cart.items, 
        totalPrice : cart.totalPrice,
    }
}