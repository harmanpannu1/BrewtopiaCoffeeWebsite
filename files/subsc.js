let buy = document.querySelectorAll(".buy");

for (let i=0; i<buy.length; i++) {
    buy[i].addEventListener("click", () => {
        alert("Added To Cart");
    })
}


let subsBack = document.querySelector(".subs_back");

subsBack.addEventListener("click", () => {
    window.location.href = "C:/Users/Hp/OneDrive/CSE326/Project/index.html";
})