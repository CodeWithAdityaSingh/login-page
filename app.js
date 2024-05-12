let signin = document.querySelector(".signin")

let signup = document.querySelector(".signup")

let title = document.querySelector(".title")
let box2 = document.querySelector(".box2")
let underline = document.querySelector(".underline")
let box1 = document.querySelector(".box1")



signin.addEventListener("click", () => {
    title.textContent = "Sign_in"
    signin.classList.add("disable")
    signup.classList.remove("disable")
    box1.classList.add("box2")
    underline.style.transform = "translateX(55px)";




})

signup.addEventListener("click", () => {
    //   box1.classList.add("box1")
    title.textContent = "Sign_up"
    signin.classList.remove("disable")
    signup.classList.add("disable")
     box1.classList.remove("box2")







})