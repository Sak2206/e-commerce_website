
function addToCart(productName, productPrice) {
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    
    cartItems.push({ name: productName, price: productPrice });

    
    localStorage.setItem('cart', JSON.stringify(cartItems));

    
    console.log(`"${productName}" added to the cart!`);


}
