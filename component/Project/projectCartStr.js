function projectCartStrf(projectData){
    const projectCartStr = projectData.map((proData)=>{
         const {id,  title, tool, imgURL,repoLink, visitLink, descrp} = proData;
        return `
        <div class="project">
                        <div class="image">
                            <img src="${imgURL}" alt="${title}">
                        </div>
                        <div class="project-text">
                            <h4> <a href="${visitLink}" target="_blank">${title}</a> </h4>
                            <p>${descrp}</p>
                            <div>
                                <a href="${visitLink}" target="_blank" class="main-btn">
                                    <span class="btn-text">Visit Site  </span>
                                    <span class="btn-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                                </a>
                                <br>
                                <a href="${repoLink}" target="_blank" class="main-btn">
                                    <span class="btn-text">Contribute</span>
                                    <span class="btn-icon"><i class="fa-brands fa-github"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
        `;
    }).join(' ');
    return projectCartStr;

}
export default projectCartStrf;