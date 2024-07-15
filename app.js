import leetcodeProblem from "./component/leetcodeProblem.js";
import practicumfunc from "./component/practicum/practicumFunc.js";
import experieceFunc from "./component/experience/experenceFunc.js";
import projectfunc from "./component/Project/projectFunc.js";
import blogfunc from "./component/Blogs/blogsFunc.js";
import certificatefunc from "./component/Certification/certificateFunc.js";
// import slider from "./component/slider/sliderSet.js";
// import startSlider from "./component/review/slider.js";
import setContact from "./component/Contact/setContact.js";
import SetResume from "./component/Resume/SetResume.js";
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
    projectfunc();
    blogfunc();
    certificatefunc();
    // slider();
    // startSlider();
    setContact();
    SetResume();
 }
window.addEventListener('DOMContentLoaded',start);