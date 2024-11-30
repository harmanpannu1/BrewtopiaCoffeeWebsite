let btn = document.querySelectorAll(".addtocart");

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", () => {
        alert("Item Added To Cart");
    });
}

let icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    window.location.href = "C:/Users/Hp/OneDrive/CSE326/Project/index.html";
}); 