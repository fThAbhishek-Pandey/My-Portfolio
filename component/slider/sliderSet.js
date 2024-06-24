import display from "./displaySlider.js";
import sliderCarts from "./sliderCard.js";
function slider (){
    const data = sliderCarts();
    const n= data.length;
    let count = 0;
    const interwalID = setInterval (()=>{
          count = (count+1)%n;
          display(data[count]);
   },2000);
}
export default slider;