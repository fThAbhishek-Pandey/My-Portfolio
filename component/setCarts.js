import get from "./getElements.js";
function setCart( selection, innerhtml){
    console.log("hello i am set cart, ",selection,innerhtml);
    const element =get(selection);
    console.log("elements :",element);
    if(element){
        element.innerHTML= innerhtml;
    }
    return;
}
export default setCart;