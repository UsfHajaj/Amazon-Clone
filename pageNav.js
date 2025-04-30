const mycart = document.querySelectorAll(".product-slider-containers .product-slider .product-card");
const cartPage = document.querySelector(".showpro .container .img img");

// التأكد من أن العنصر موجود قبل تغيير الصورة
if (cartPage && localStorage.getItem("selectedProductImage")) {
    cartPage.src = localStorage.getItem("selectedProductImage");
}

mycart.forEach(ele => {
    ele.addEventListener("click", (e) => {
        let imageSrc = e.target.src;
        localStorage.setItem("selectedProductImage", imageSrc);

        // التحقق قبل محاولة تعيين الصورة
        if (cartPage) {
            cartPage.src = imageSrc;
        }
        document.body.classList.add("slide-out");

        setTimeout(() => {
            window.location.href = "cart.html";
        }, 500);
    });
});


// console.log(cartPage.src)