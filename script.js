// 1. Initialize the cart count
let cartCount = 0;

// 2. Select the shopping basket icon from the HTML
const basketIcon = document.querySelector('.fa-basket-shopping');

// 3. Create a small badge to show the number of items
const badge = document.createElement('span');
badge.style.cssText = `
    background: red;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 50%;
    position: relative;
    top: -10px;
    left: -5px;
    display: none;
`;
basketIcon.appendChild(badge);

// 4. Function to handle adding items
function addToCart(productName) {
    cartCount++;
    
    // Show the badge and update the number
    badge.style.display = 'inline-block';
    badge.innerText = cartCount;

    // Show a professional alert (or you could use a fancy toast notification)
    console.log(`${productName} added to basket! Total items: ${cartCount}`);
    alert(`${productName} has been added to your basket!`);
}

// 5. Add "Event Listeners" to all your buttons
const addButtons = document.querySelectorAll('.add-cart');

addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Find the product name from the card text
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('.name').innerText;
        
        addToCart(productName);
    });
});
