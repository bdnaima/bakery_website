
// Fetch cupcakes
fetch("products.json")
    // Fetch Cupcakes from products.json file
    .then((response) => response.json()
        .then((data) => {
            const cupCakeContainer = document.getElementById("cupcake-container");
            data.cupcakes.forEach(cupcake => {
                cupCakeContainer.innerHTML += `
                <div class="card">
                    <img src="${cupcake.image}" alt="${cupcake.name}">
                    <p>${cupcake.name}</p>
                    <p>$${cupcake.price.toFixed(2)}</p>
                </div>
                `;
            });

            // Fetch wedding cakes from products.json file
            const weddingCake = document.getElementById("wedding-cake-container");
            data.weddingCakes.forEach(cake => {
                weddingCake.innerHTML += `
                <div class="card">
                    <img src="${cake.image}" alt="${cake.name}">
                    <p>${cake.name}</p>
                    <p>$${cake.price}</p>
                </div>
                `
            })
        })).catch((error) => console.log(error));

// Route to all products
const viewAllProducts = document.getElementById("view-products")


if (viewAllProducts) {
    viewAllProducts.addEventListener('click', () => {
        window.location.href = "products.html"
    })
}