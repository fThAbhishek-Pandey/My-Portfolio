import createCarts from "./CarsString.js";
import practicum from "./practicumData.js";
import setCart from "../setCarts.js";
function practicumfunc(){
    const datas = practicum();
    const practicumCart = createCarts(datas);
   return  setCart(".practicum-Container",practicumCart);
}
export default practicumfunc;