const categoryList = document.getElementById('categories');

// İSTEK ATMAYA YARAR
document.addEventListener("DOMContentLoaded",function() {
 // VERİLERİN ÇEKİLMESİ VE İŞLENMESİ   
 fetch('https://api.escuelajs.co/api/v1/categories')
  .then(function(response) {
    return response.json();
  })
  // VERİLERİN EKRANA BASILMASI
  .then(function(data) {
    data.slice(0, 4).forEach(function(category) {
      const categoryBox = document.createElement('div');
      categoryBox.classList.add('category')
      categoryBox.innerHTML = `
      <img src=${category.image} alt="" />
      <p>${category.name}</p>`;
      categoryList.appendChild(categoryBox);
    });  
  }); 
});

const productList = document.getElementById('products');

document.addEventListener("DOMContentLoaded",function() {
 fetch('https://api.escuelajs.co/api/v1/products')
  .then(function(response) {
    return response.json();
  })
  // VERİLERİN EKRANA BASILMASI
  .then(function(data) {
    data.slice(0, 30).forEach(function(product) {
      const productBox = document.createElement('div');
      productBox.classList.add('product')
      productBox.innerHTML = `
      <img src=${product.images} alt="">
      <div class="explanation">
          <p>${product.title}</p>
          <h1>${product.category.name}</h1>
      </div>  
      <div class="price">
          <p>${product.price}$</p>
          <button>Sepete Ekle</button>
      </div>`
      productList.appendChild(productBox);
   });
 });
}); 