// import experienceDataf from "./experienceData.js";
function experienceCartStr(expeData){
        // const  = experienceDataf();
        const expStr = expeData.map((experience)=>{
            const {
                id, title , institute, instituteURL ,  skill,  learn , imgURL ,   certification,
                projectTitle ,   projectLink ,desp, } =experience;
            return `
             <div class="project">
                        <div class="image">
                            <a href="${certification}" target="_blank"><img src="${imgURL}" alt="${title}"></a>
                        </div>
                        <div class="project-text">
                            <h4>${title}</h4>
                            <a href="${certification}" target="_blank"><span>${institute}</span></a>
                            <p>${desp}</p>
                        </div>
                    </div>`;
        }).join(' ');   
        return expStr;  
}
export default experienceCartStr ;