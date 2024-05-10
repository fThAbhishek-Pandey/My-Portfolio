(function () {
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
})();
// type writer
// const textArr = ['Competitive Programmer', 'I solved 400+ LeetCode questions','Mern Stack Developer','I command on backend Development']; /* The text */
// const speed = 100; /* The speed/duration of the effect in milliseconds */
// let index = 0;
// let textIndex = 0;

// function typeWriter() {
//     const textElement = document.getElementById('text');
//     if (index < textArr.length) {
//         if (textIndex < textArr[index].length) {
//             textElement.innerHTML += textArr[index].charAt(textIndex);
//               textIndex++;
//             setTimeout(typeWriter, speed);
//         } else {
//             index++;
//             textIndex = 0;
//             textElement.innerHTML = ''; // Clear the text element for the next text
//             setTimeout(typeWriter, speed * 2); // Wait for a while before typing the next text
//         }
//     }
   
// }

// Start the typing effect
 //typeWriter();
// leetcode data retriving and sending to html
  let easyfe =document.getElementById('easy');
let mediumfe =document.querySelector('#medium');
let hardfe =document.querySelector('#hard');
let totalfe=document.querySelector('#total');

const requrl ='https://alfa-leetcode-api.onrender.com/Abhishek-Pandey/solved';
const xhr= new XMLHttpRequest();
xhr.open('GET',requrl);
xhr.onreadystatechange= function (){
    if (xhr.readyState === 4){
        
        const data = JSON.parse(this.responseText);/* when the data come by url the it also come as datatype of string . we convert it into object create a JSON file*/
        const easylc =data.easySolved ;
        const hardlc=data.hardSolved;
        const mediumlc = data.mediumSolved;
        const totallc =data.solvedProblem ;
        easyfe.innerHTML =easylc;
        mediumfe.innerHTML= mediumlc;
        hardfe.innerHTML =hardlc;
        totalfe.innerHTML=totallc ;
      
    }
}
xhr.send();
