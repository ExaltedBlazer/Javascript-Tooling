//Importing module
//import { addToCart, totalPrice, totalQuantity } from '/shoppingCart.js';

console.log('Importing Module');
//console.log(shippingCost);

//addToCart('bread', 5);
//console.log(totalPrice, totalQuantity);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

//console.log('Start fetching');
//const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//const data = await res.json();
//console.log(data);
//console.log('true');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
