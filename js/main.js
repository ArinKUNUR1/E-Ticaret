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

var modal = document.querySelector(".modal")
var toplamBilgi = document.querySelector("#toplamBilgi")

let fiyatlar = []

function sepeteEkle(parametre) {
  const urunBox = document.createElement("div")
  urunBox.classList.add("urunBox")
  urunBox.innerHTML = `
          <h1>${parametre.name}</h1>
          <h2>${parametre.price}$</h2>
  `;
  
  modal.appendChild(urunBox)

  fiyatlar.push(Number(parametre.price))
  const toplam = fiyatlar.reduce((a,b)=>a + b,0)
  toplamBilgi.innerHTML = toplam
}

const productList = document.getElementById('products');

// İSTEK ATMAYA YARAR
document.addEventListener("DOMContentLoaded",function() {
 // VERİLERİN ÇEKİLMESİ VE İŞLENMESİ 
 fetch('https://api.escuelajs.co/api/v1/products')
  .then(function(response) {
    return response.json();
  })
  // VERİLERİN EKRANA BASILMASI
  .then(function(data) {
    data.slice(0, 100).forEach(function(product) {
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
          <button onclick="sepeteEkle({name:'${product.title}', price:'${product.price}' })">Sepete Ekle</button>
      </div>`
      productList.appendChild(productBox);
   });
 });
});

// SEPET
var sepetBtn = document.getElementById("sepet")
var modalBox = document.querySelector(".modal-box")
var closeBtn = document.getElementById("close")

sepetBtn.addEventListener("click",function() {
  modalBox.classList.add('active');
})

closeBtn.addEventListener("click",function() {
  modalBox.classList.remove('active');
})