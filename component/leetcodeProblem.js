// leetcode data retriving and sending to html
import get from "./getElements.js";
let easyfe =get('#easy');
let mediumfe =get('#medium');
let hardfe =get('#hard');
let totalfe=get('#total');
function leetcodeProblem(){
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
}
export default leetcodeProblem;
