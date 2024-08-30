var total;


total = [];


document.getElementById('t-shirt-btn').addEventListener('click', (event) => {
  let element_shopping_cart = document.getElementById('shopping-cart');
  element_shopping_cart.style.visibility = ('visible') ? 'visible' : 'hidden';
  let element_cart_content = document.getElementById('cart-content');
  let new_div = document.createElement('div');
  new_div.setAttribute("class", 'shopping-cart-item');
  let new_span = document.createElement('span');
  new_span.innerText = 'T-shirt ';

  new_div.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = '$20';

  new_div.appendChild(new_span2);

  element_cart_content.appendChild(new_div);
  total.push(20);
  let element_total_price = document.getElementById('total-price');
  element_total_price.replaceChildren();
  let new_span3 = document.createElement('span');
  new_span3.innerText = 'Total: $';

  element_total_price.appendChild(new_span3);
  let new_span4 = document.createElement('span');
  new_span4.innerText = total.reduce((a,b) => a+b, 0);

  element_total_price.appendChild(new_span4);

});

document.getElementById('hoodie-btn').addEventListener('click', (event) => {
  let element_shopping_cart2 = document.getElementById('shopping-cart');
  element_shopping_cart2.style.visibility = ('visible') ? 'visible' : 'hidden';
  let element_cart_content2 = document.getElementById('cart-content');
  let new_div2 = document.createElement('div');
  new_div2.setAttribute("class", 'shopping-cart-item');
  let new_span5 = document.createElement('span');
  new_span5.innerText = 'Hoodie ';

  new_div2.appendChild(new_span5);
  let new_span6 = document.createElement('span');
  new_span6.innerText = '$40';

  new_div2.appendChild(new_span6);

  element_cart_content2.appendChild(new_div2);
  total.push(40);
  let element_total_price2 = document.getElementById('total-price');
  element_total_price2.replaceChildren();
  let new_span7 = document.createElement('span');
  new_span7.innerText = 'Total: $';

  element_total_price2.appendChild(new_span7);
  let new_span8 = document.createElement('span');
  new_span8.innerText = total.reduce((a,b) => a+b, 0);

  element_total_price2.appendChild(new_span8);

});

document.getElementById('pants-btn').addEventListener('click', (event) => {
  let element_shopping_cart3 = document.getElementById('shopping-cart');
  element_shopping_cart3.style.visibility = ('visible') ? 'visible' : 'hidden';
  let element_cart_content3 = document.getElementById('cart-content');
  let new_div3 = document.createElement('div');
  new_div3.setAttribute("class", 'shopping-cart-item');
  let new_span9 = document.createElement('span');
  new_span9.innerText = 'Pants ';

  new_div3.appendChild(new_span9);
  let new_span10 = document.createElement('span');
  new_span10.innerText = '$30';

  new_div3.appendChild(new_span10);

  element_cart_content3.appendChild(new_div3);
  total.push(30);
  let element_total_price3 = document.getElementById('total-price');
  element_total_price3.replaceChildren();
  let new_span11 = document.createElement('span');
  new_span11.innerText = 'Total: $';

  element_total_price3.appendChild(new_span11);
  let new_span12 = document.createElement('span');
  new_span12.innerText = total.reduce((a,b) => a+b, 0);

  element_total_price3.appendChild(new_span12);

});

document.getElementById('clear-btn').addEventListener('click', (event) => {
  let element_cart_content4 = document.getElementById('cart-content');
  element_cart_content4.replaceChildren();
  let element_total_price4 = document.getElementById('total-price');
  element_total_price4.replaceChildren();
  total = [];
});

document.getElementById('purch-btn').addEventListener('click', (event) => {
  if (total.length === 0) {
    let element_list = document.getElementById('total-price');
    element_list.innerText = 'Your cart is empty';
  } else {
    alert('Your order will be delivered shortly');
    let element_cart_content4 = document.getElementById('cart-content');
    element_cart_content4.replaceChildren();
    let element_total_price4 = document.getElementById('total-price');
    element_total_price4.replaceChildren();
    total = [];
  }
});