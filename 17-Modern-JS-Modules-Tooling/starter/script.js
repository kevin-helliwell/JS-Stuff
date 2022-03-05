// Importing module
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price);

import add, {cart} from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// Top-level await (ES2022)
// ** blocks execution of module until await finishes **
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title: data.at(-1).title, text: data.at(-1).body};
};
const lastPost = getLastPost();
// console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
// console.log(lastPost2);

// The Module Pattern
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2); // works
// console.log(ShoppingCart2.shippingCost); // undefined
// ** Module Pattern has limitations at scale **

// CommonJS Modules
// Export
// export.addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// };
// // Import
// const {addToCart} = require('./shoppingCart.js')
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true},
};
const stateClone = Object.assign({}, state);
console.log(stateClone);
