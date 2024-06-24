import sliderData from "./sliderData.js";
function sliderCarts (){
        const sliderCartStr = sliderData.map((slider)=>{
             const {title,imgURL} = slider;
            return ` 
                    <img src="${imgURL}" alt="${title}">
                    <div class="title">${title}</div>`
        });
        return sliderCartStr;
}
export default sliderCarts;