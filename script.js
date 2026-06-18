// Modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");

// Fetch products
fetch("products.json")
    .then((response) => response.json())
    .then((data) => {

        // Cupcakes
        const cupCakeContainer = document.getElementById("cupcake-container");
        if (cupCakeContainer) {

            data.cupcakes.forEach((cupcake) => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${cupcake.image}" alt="${cupcake.name}">
                    <p>${cupcake.name}</p>
                    <p>$${cupcake.price.toFixed(2)}</p>
                    `;

                card.addEventListener("click", () => {

                    modalImage.src = cupcake.image;
                    modalTitle.textContent = cupcake.name;
                    modalPrice.textContent = `$${cupcake.price.toFixed(2)}`;
                    modalDescription.textContent =
                        cupcake.description;

                    modal.classList.add("show");

                });

                cupCakeContainer.appendChild(card);

            });
        }

        // Wedding cakes
        const weddingCakeContainer = document.getElementById("wedding-cake-container");
        if (weddingCakeContainer) {

            data.weddingCakes.forEach((cake) => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${cake.image}" alt="${cake.name}">
                    <p>${cake.name}</p>
                    <p>$${cake.price}</p>
                    `;

                card.addEventListener("click", () => {
                    modalImage.src = cake.image;
                    modalTitle.textContent = cake.name;
                    modalPrice.textContent = `$${cake.price.toFixed(2)}`;
                    modalDescription.textContent =
                        cake.description;

                    modal.classList.add("show");

                });
                weddingCakeContainer.appendChild(card);
            });
        }
    })
    .catch((error) => console.log(error));


// View all products button
const viewAllProducts =
    document.getElementById("view-products");
if (viewAllProducts) {
    viewAllProducts.addEventListener("click", () => {
        window.location.href = "products.html";
    });

}
// More about us button
const moreAboutUs = document.getElementById("more-about-us");
if (moreAboutUs) {
    moreAboutUs.addEventListener("click", () => {
        window.location.href = "about.html";
    });

}

// Close modal
const closeModal = document.getElementById("close-modal");

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

}