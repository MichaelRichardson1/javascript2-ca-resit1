import { handleClick } from "./utils/handleClick.js";
import { getCart } from "./utils/getCart.js";
import icecreams from "./data/ice-creams.js";


// Populate index page
createHtml();

// Code for above function call
function createHtml() {

    // target container to populate
    const icecreamContainer = document.querySelector(".ice-creams");

    // link to result of localStorage to check items exist
    const cart = getCart();

    // clears contents of container
    icecreamContainer.innerHTML = "";

    // forEach loop of icecreams array import
    icecreams.forEach((icecream) => {

        // set font awesome class to display plus icon for adding to storage
        let cssClass = "fa-plus";

        // checks if item exists in storage
        const doesItemExist = cart.find(function (item) {
            return parseInt(item.id) === icecream.id;
        });

        // checks if item exists. If true, changes class to display minus icon
        // for removal from storage
    if (doesItemExist) {
        cssClass = "fa-minus";
    }

    // inserts html into container from the icecreams array import
    // and sets data properties to be included in storage
    icecreamContainer.innerHTML += `<div class="ice-cream" style="border-color: ${icecream.colour}"</div>
                                        <h5>${icecream.name}</h5>
                                        <p>${icecream.flavours}</p>
                                        <p>${icecream.price} kr</p>                                        
                                        <i class="fa ${cssClass}" data-id="${icecream.id}" data-name="${icecream.name}" data-price="${icecream.price}"></i>
                                    </div>`;
        
    // targets all i elements inside ice-cream class
    const cartButtons = document.querySelectorAll(".ice-cream i");

    // applies handleClick function to click event on i elements above
    cartButtons.forEach((button) => {
        button.addEventListener("click" , handleClick);
    });
});
}







