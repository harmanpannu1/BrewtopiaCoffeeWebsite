let btn = document.querySelectorAll(".addtocart");

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener( "click", () => {
        alert("items added");
    })
}

let backBtn = document.querySelector(".back_btn");

backBtn.addEventListener("click", () => {
    window.location.href = "C:/Users/Hp/OneDrive/CSE326/Project/order/landing.html";
})