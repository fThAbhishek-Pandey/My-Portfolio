import certicateDataf from "./certificationData.js";
import ceritificateCartf from "./certificateCart.js";
import setCart from "../setCarts.js";
function certificatefunc (){
    const certicateData = certicateDataf();
    const ceritificateCartStr= ceritificateCartf(certicateData);
     return setCart(".certification",ceritificateCartStr);
}
export default certificatefunc;