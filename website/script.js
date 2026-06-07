let count = 0;

function addToCart(productName) {

    count++;

    document.getElementById("cart-count").textContent = count;

    const list = document.getElementById("cart-items");

    const item = document.createElement("li");

    item.textContent = productName;

    list.appendChild(item);
}
