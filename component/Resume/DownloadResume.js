import SocailData from "../configuration/SocialData.js";
function DownLoadResume (){
    return `
    <a href=${SocailData.resumeLink} target="_blank" class="main-btn">
         <span class="btn-text">Open Resume</span>
         <span class="btn-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
    </a> `
}
export  default DownLoadResume;