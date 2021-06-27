import { getCart } from "./utils/getCart.js";
import { cartKey } from "./data/cartKey.js";

// assigns cart items to changeable variable
let cart = getCart(cartKey);

const cartContainer = document.querySelector(".cart");

/* removeItem method attempt - non-functional*/
function clearItem() {

    const removeIcon = document.querySelectorAll(".cart-item i");

    removeIcon.forEach(function (minus) {
        minus.addEventListener("click", removeFromCart);

    function removeFromCart () {        
        if (confirm("Remove this item?")) {

            localStorage.removeItem("id");   
                        
        }

        updateList(); 
        
    }    
    
    });
}

/* Filter method attempt at removing item - non-functional

function clearItem(event) {

    const removeItem = event.target.dataset.id;
    const objectToArray = Object.entries(cartKey);

    let newList = objectToArray.filter(function (id) {
        if(removeItem !== id) {
            return true;
        }
        if(newList.length === 0) {
            cartContainer.innerHTML = `<p>Cart is empty.</p>`;
        }
    });

    cart = newList;

    updateList();
}
*/


// function to update cart list on cart page
function updateList () {

    cartContainer.innerHTML = "";

    cart.forEach(function (cart) {

        cartContainer.innerHTML += `<div class="cart-item">
                                        <h5>${cart.name}</h5>
                                        <p>${cart.price} kr</p>
                                        <i class="fa fa-minus" data-id="${cart.id}"></i>
                                    </div>`;
    
    });

}

// performs above function on page startup
updateList();

// performs clearItem function upon click event
clearItem();

const clearBtn = document.querySelector(".clear");


// add click event
clearBtn.addEventListener("click", clearList);


// function to clear entire cart + localStorage and reset values
    function clearList() {
        if (confirm("You are about to clear the cart, proceed?")) {
            
            localStorage.clear();
            
            cartContainer.innerHTML = "";

            totalItemsContainer.innerHTML = "0";
            totalPriceContainer.innerHTML = "0";
        }
    }

// displays total items
let totalItems = cart.length;

const totalItemsContainer = document.querySelector(".total-container");
totalItemsContainer.innerHTML += totalItems;


// displays sum of prices after converting string values
let totalPrice = 0;
for (let i in cart) {

    const pricesString = cart[i].price;
    const pricesNumbers = parseInt(pricesString, Number);
    totalPrice += pricesNumbers;

}

const totalPriceContainer = document.querySelector(".price-container");
totalPriceContainer.innerHTML += totalPrice;