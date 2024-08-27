
{let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItems = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');

function displayCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    totalAmount.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    window.location.href = 'checkout.html';
}

displayCart();}

