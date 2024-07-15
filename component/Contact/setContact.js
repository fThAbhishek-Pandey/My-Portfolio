import setCart from "../setCarts.js";
import Social from "./Socialink.js";
console.log("social ",Social);
function setContact (){
        const innerHTML = Social();
        // console.log("hi i am setContact : ");
        setCart(".contact-icons",innerHTML);
}
export default setContact;