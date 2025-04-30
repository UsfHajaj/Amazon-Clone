const btnTop = document.getElementById("top");
btnTop.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const slider = document.querySelector(".product-slider");
const prevProBtn = document.getElementById("prevProduct");
const nextProBtn = document.getElementById("nextProduct");

prevProBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -220, behavior: "smooth" });
});

nextProBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 220, behavior: "smooth" });
});

// دعم السحب بالماوس والتاتش
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});


const myimg = document.querySelector(".showpro .img img");
const price = document.querySelector(".showpro .price h2");
const count = document.getElementById("number");
const btnAdd = document.getElementById("addtocart");

let myProducts=[]
btnAdd.addEventListener("click", (e) => {
    let priceValue = parseFloat(price.innerHTML.replace("$", "").trim()); // إزالة $ وتحويل النص لرقم
    let quantity = count.value > 0 ? parseInt(count.value) : 1;
    let total = priceValue * quantity;
    let cart = {
        id:Date.now(),
        img: myimg.src,
        Proprice: priceValue,
        procount: quantity,
        prototal:total
    }
    myProducts.push(cart);
    JSON.stringify(myProducts)
    localStorage.setItem("productsForCart", JSON.stringify(myProducts));
})

console.log(myimg.src)