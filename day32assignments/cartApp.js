// 1. Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {
  
   if ( !localStorage.getItem('cart') ) { 
    const cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
      }
    };



// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem(item) {

  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

//Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.

function removeItem(itemId) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter(item => item.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(newCart));
     }

//Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.

function dysplayCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
}

// Create event listeners for the add item form and display cart button to call the respective functions.

  const addItemForm = document.getElementById('addItemForm');
  addItemForm.addEventListener('submit', e => {
  e.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value); // grab itemprice numberform and declare it a variable, added parsefloat because number comes back as string without parse
  const item = { id: Date.now(), name: itemName, price: itemPrice };
  addItem(item);
  addItemForm.reset();
  });

  const displayCartButton = document.getElementById('displayCartButton');
  displayCartButton.addEventListener('click', dysplayCart);

  initializeCart();
  
