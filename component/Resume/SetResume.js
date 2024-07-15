import DownLoadResume from "./DownloadResume.js";
const OpenBtns = document.querySelectorAll(".openResume");
console.log("i am in set resume0 : ");

function SetResume (){
    console.log("i am in set resume1 : ");
    console.log("OpenBtns : ",OpenBtns);
    const innerHTML=  DownLoadResume();
     OpenBtns.forEach ((openBtn)=>{
           console.log("--> ",openBtn.innerHTML)
           openBtn.innerHTML = innerHTML;
           console.log("--> ",openBtn.innerHTML)
     });
}
export default SetResume;