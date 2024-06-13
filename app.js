import leetcodeProblem from "./component/leetcodeProblem.js";
import practicumfunc from "./component/practicum/practicumFunc.js";
import experieceFunc from "./component/experience/experenceFunc.js";
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
    practicumfunc();
    experieceFunc();
 }
window.addEventListener('DOMContentLoaded',start);