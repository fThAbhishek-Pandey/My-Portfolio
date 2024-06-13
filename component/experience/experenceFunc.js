import experienceCartStr from "./experieceCartStr.js";
import experienceDataf from "./experienceData.js";
import setCart from "../setCarts.js";
function experieceFunc (){
     const expeData = experienceDataf();
     const expCartStr = experienceCartStr(expeData);
    return  setCart (".experience",expCartStr);
}
export default experieceFunc;