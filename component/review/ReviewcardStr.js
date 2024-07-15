import ReviewCard from "./reviewCard.js";

function ReviewCardStr (ThirthData){
            const len = ThirthData.length-1 ;
            const reviewCard = ThirthData.map((tirthSthal, index)=>{
                     console.log(index);
                     let  flag= false;
                     if(len === index) flag = true;
                     const tirth = ReviewCard(tirthSthal,index, flag);
                     return tirth;
     }).join(" ");
      return reviewCard;
}
export default ReviewCardStr;