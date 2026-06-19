let products = [];
let cart = [];

let productContainer = document.getElementById("products");
let loading = document.getElementById("loading");
let searchInput = document.getElementById("search");
let categorySelect = document.getElementById("category");
let cartCount = document.getElementById("cartCount");
let statsDiv = document.getElementById("stats");


fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(data => {
        products = data;
        displayProducts(products);
        productStatistics(products);   
    })

    .catch(error => {
        console.log(error);
        loading.innerText = "Failed to Load Products";
    })

    .finally(() => {
        console.log("Products Loaded Successfully");
        loading.style.display = "none";
    });


function getFilteredProducts() {
    let searchValue = searchInput.value.toLowerCase();
    let category = categorySelect.value;

    return products.filter(product => {
        let matchesSearch = product.title.toLowerCase().includes(searchValue);  
        let matchesCategory = category === "all" || product.category === category;
        return matchesSearch && matchesCategory;
    });
}


function displayProducts(productList) {
    productContainer.innerHTML = "";

    if (productList.length === 0) {
        productContainer.innerHTML = `<p style="color:#888;padding:40px;grid-column:1/-1;text-align:center;">No products found.</p>`;
        return;
    }
    productList.forEach(product => {
        let card = document.createElement("div");   
        card.className = "card";

        let inCart = cart.find(c => c.id === product.id);   

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <span class="category">${product.category}</span>
            <p class="price">₹${product.price}</p>
            <p class="rating">${product.rating.rate} (${product.rating.count} reviews)</p>
            <button
                onclick="addToCart(${product.id}, this)"
                ${inCart ? 'disabled style="background:green;"' : ''}
            >
                ${inCart ? "Added To Cart ✓" : "Add To Cart"}
            </button>
        `;

        productContainer.append(card);  
    });
}


searchInput.addEventListener("input", () => {
    let filtered = getFilteredProducts();
    displayProducts(filtered);
    productStatistics(filtered);
});


categorySelect.addEventListener("change", () => {
    let filtered = getFilteredProducts();
    displayProducts(filtered);
    productStatistics(filtered);
});


function productStatistics(items) {
    let totalProducts = items.length;

    let totalPrice = items.reduce((sum, product) => sum + product.price, 0);

    let avgPrice = totalProducts ? totalPrice / totalProducts : 0;

    let sorted = [...items].sort((a, b) => a.price - b.price);

    let lowestProduct = sorted[0];           
    let highestProduct = sorted[sorted.length - 1];  

    let highestRated = items.reduce((best, p) =>
        p.rating.rate > (best?.rating?.rate ?? 0) ? p : best, null
    );

    statsDiv.innerHTML = `
        <div class="stat-box">
            Total Products
            <strong>${totalProducts}</strong>
        </div>
        <div class="stat-box">
            Average Price
            <strong>₹${avgPrice.toFixed(2)}</strong>
        </div>
        <div class="stat-box">
            Highest Price
            <strong>₹${highestProduct ? highestProduct.price.toFixed(2) : "—"}</strong>
            <span style="font-size:11px;color:#999;">${highestProduct ? highestProduct.title.slice(0, 28) + "…" : ""}</span>
        </div>
        <div class="stat-box">
            Lowest Price
            <strong>₹${lowestProduct ? lowestProduct.price.toFixed(2) : "—"}</strong>
            <span style="font-size:11px;color:#999;">${lowestProduct ? lowestProduct.title.slice(0, 28) + "…" : ""}</span>
        </div>
        <div class="stat-box">
            Top Rated
            <strong>${highestRated ? highestRated.rating.rate : "—"}</strong>
            <span style="font-size:11px;color:#999;">${highestRated ? highestRated.title.slice(0, 28) + "…" : ""}</span>
        </div>
    `;
}


function addToCart(id, button) {
    let product = products.find(p => p.id === id);

    cart.push(product);

    cartCount.innerText = cart.length;

    button.innerText = "Added To Cart ✓";
    button.disabled = true;
    button.style.background = "green";
}


function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);

    cartCount.innerText = cart.length;

    displayProducts(getFilteredProducts());
}