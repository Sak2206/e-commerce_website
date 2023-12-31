function updateQuantityInCart(productName, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let foundItem = cartItems.find(item => item.name === productName);

    if (foundItem) {
        foundItem.quantity = quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

 
    displayCartItems();
}
