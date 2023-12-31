let cart = [
    { name: 'Aloe Vera', price: 14.99 },
    { name: 'Lavender', price: 19.99 },
    
];

document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');

    
    cartContainer.innerHTML = '';

    
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

       
        cartItemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItemDiv);
    });
}

function removeFromCart(index) {
    
    cart.splice(index, 1);


    displayCartItems();
}

function proceedToBuy() {
    
    alert('Proceeding to buy.');
}
