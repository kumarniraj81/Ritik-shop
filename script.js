const products = [
    { title: "Product 1", image: "https://m.media-amazon.com/images/I/61u6E7uQ93L._AC_SY200_.jpg", description: "Description for Product 1." },
    { title: "Product 2", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg", description: "Description for Product 2." },
    { title: "Product 3", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/PC/SmartHome/Revamp/PC/action_cameras._CB499295205_.jpg", description: "Description for Product 3." },
    { title: "Product 4", image: "https://m.media-amazon.com/images/I/51Vl3NXlzbL._AC_UY327_FMwebp_QL65_.jpg", description: "Description for Product 4." },
    { title: "Product 5", image: "https://m.media-amazon.com/images/I/51NSC2qvOxL._AC_UL480_FMwebp_QL65_.jpg", description: "Description for Product 5." },
    { title: "Product 6", image: "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY327_FMwebp_QL65_.jpg", description: "Description for Product 6." },
    { title: "Product 7", image: "https://m.media-amazon.com/images/I/714QJogJ56L._AC_UY327_FMwebp_QL65_.jpg", description: "Description for Product 7." },
    { title: "Product 8", image: "https://m.media-amazon.com/images/I/61NkRkulDHL._AC_UL480_FMwebp_QL65_.jpg", description: "Description for Product 8." }
];

products.forEach((product, index) => {
    const box = document.getElementById(`box-${index + 1}`);
    box.innerHTML = `
        <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" onclick="window.location.href='form.html'">Buy Now</button>
                    <button class="btn btn-secondary" onclick="window.location.href='Cart.html'">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
});
