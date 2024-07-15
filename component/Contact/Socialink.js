import SocailData from "../configuration/SocialData.js";

function social(){
      return `
    <div class="contact-icon">
      <a href= ${SocailData.LeetcodeLink} target="_blank" >
          <i class="fa-solid fa-code"></i>
      </a>
      <a href= ${SocailData.LinkedinLink}  target="_blank" >
          <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href= ${SocailData.gitHubLink}  target="_blank">
          <i class="fab fa-github"></i>
      </a>
      <a href= ${SocailData.youtubeLink}  target="_blank" >
          <i class="fab fa-youtube"></i>
      </a>
     </div>
      `
}
export default social;