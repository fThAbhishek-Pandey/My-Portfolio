// import get from "../getElements.js";
// const sliderContainer = get(".slide-container");
// function display (type){
//         console.log("i am review display  function")
//         const active = get(".Reviewactive");
//         const last = get(".Reviewlast");
//         let next = active.nextElementSibling
//         if (!next) {
//             next = sliderContainer.firstElementChild
//         }
//            active.classList.remove('Reviewactive');
//            last.classList.remove('Reviewlast');
//            next.classList.remove('Reviewnext');

//   if (type === 'Reviewprev') {
//     active.classList.add('Reviewnext');
//     last.classList.add('Reviewactive');
//     next = last.previousElementSibling
//     if (!next) {
//       next =sliderContainer.lastElementChild
//     }
//     next.classList.remove('Reviewnext')
//     next.classList.add('Reviewlast')
//     return
//   }
//   active.classList.add('Reviewlast')
//   last.classList.add('Reviewnext')
//   next.classList.add('Reviewactive')
// }       
// export default display;