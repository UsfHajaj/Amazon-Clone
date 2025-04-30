let mybox = document.querySelector(".chickout .container .product");
let Alltotal = document.querySelector(".chickout .container .total");
let calctotal = 0;  // تعريف المجموع الكلي خارج الـ if
let mylist;
if (localStorage.getItem("productsForCart")) {
    mylist = JSON.parse(localStorage.getItem("productsForCart"));
    
    showData(mylist);

    Alltotal.innerHTML = `$ ${calctotal.toFixed(2)}`; // تنسيق الرقم ليظهر بشكل واضح
}

function showData(l) {
    mybox.innerHTML = ""; // تفريغ المحتوى أولًا

    mylist.forEach(ele => {
        mybox.innerHTML += `  <!-- هنا استخدمنا += بدلاً من = -->
            <div class="box">
                <img src="${ele.img}" alt="">
                <h3>price : <span>$ ${ele.Proprice}</span></h3>
                <p class="quantity">${ele.procount}</p>
            </div>
        `;
        calctotal += parseFloat(ele.prototal); // التأكد من أن القيمة رقمية
    });
}
showData(mylist);