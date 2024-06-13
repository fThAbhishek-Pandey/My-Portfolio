import leetcodeProblem from "./component/leetcodeProblem.js";
import createCarts from "./component/CarsString.js";
import practicum from "./component/practicumData.js";
import setCart from "./component/setCarts.js";
function switchBTN() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
};
 function start (){
    switchBTN();
    leetcodeProblem();
    const datas = practicum();
    const practicumCart = createCarts(datas);
    setCart(".project-Container",practicumCart);
 }
window.addEventListener('DOMContentLoaded',start);