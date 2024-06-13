import projectCartStrf from "./projectCartStr.js";
import setCart from "../setCarts.js";
import projectDataf from "./ProjectData.js";

function projectfunc(){
     const projectData = projectDataf();
     const cartString = projectCartStrf(projectData);
     return setCart (".project-Container",cartString);
}

export default projectfunc;