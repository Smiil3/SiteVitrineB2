let button = document.querySelector(".menu-icon")
button.addEventListener("click", ()=> {
if (document.querySelector(".iconburger").src === "http://127.0.0.1:8080/img/fermer.png") {
    document.querySelector('main').classList.remove("hidden_phone")
    document.querySelector('footer').classList.remove("hidden_phone")
    document.querySelector(".navbar").classList.remove("yellow")
    document.querySelector("body").classList.remove("white")
    document.querySelector(".iconburger").src = "img/menu.png"
    document.querySelector(".nav--phone").classList.add("hidden_phone")
} else {
    document.querySelector('main').classList.add("hidden_phone")
    document.querySelector(".navbar").classList.add("yellow")
    document.querySelector("body").classList.add("white")
    document.querySelector(".iconburger").src = "img/fermer.png"
    document.querySelector(".nav--phone").classList.remove("hidden_phone")
    document.querySelector('footer').classList.add("hidden_phone")

}
})
