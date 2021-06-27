import { getCart } from "./getCart.js";
import { saveCart } from "./saveCart.js";

// exports function for use in other files
export function handleClick() {

    // used to toggle between classes
    this.classList.toggle ("fa-minus");
    this.classList.toggle ("fa-plus");


    // sets data item variables to be included in cart
    const id = this.dataset.id;
    const name = this.dataset.name; 
    const price = this.dataset.price; 

    // sets cart variable to be the result of getCart function
    const cart = getCart();

    // returns id of item(s) found in getCart function
    const cartItemExists = cart.find(function (item) {
        return item.id === id;        
    });

    // check if item id already exists and creates a new entry
    // using id, name and price to push into localStorage if
    // existing id is not found
    if (cartItemExists === undefined) {

        const newItem = { id: id, name: name, price: price };

        cart.push(newItem);
        saveCart(cart);

    } else {       

        const newCart = cart.filter((item) => item.id !== id);
        saveCart(newCart);
    }
}

