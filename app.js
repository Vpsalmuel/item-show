body = document.body;
// const prodImg = document.querySelector(".product-image");
// const prodName = document.querySelector(".product-name");
// // const prodID = document.querySelector(".first-content");
// const prodPrice = document.querySelector(".product-price");
// const prodDesc = document.querySelector(".product-description");

function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        const product = document.createElement("div");
        product.className = "product-container";
        body.appendChild(product);
        const productContent = document.createElement("div");
        productContent.className = "content";
        product.appendChild(productContent);
        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.className = "product-image";
        productContent.appendChild(productImage);
        const productName = document.createElement("p");
        productName.className = "product-name";
        productName.textContent = item.title;
        productContent.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.className = "product-price";
        productPrice.textContent = item.price;
        productContent.appendChild(productPrice);
        const productDescription = document.createElement("p");
        productDescription.className = "product-description";
        productDescription.textContent = item.description;
        productContent.appendChild(productDescription);
      });
    });
}

getData();
