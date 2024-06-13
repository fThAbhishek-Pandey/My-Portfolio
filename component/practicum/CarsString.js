function createCarts(datas){
    console.log("i am create Carts, ",datas);
    const dataStr = datas.map((data)=>{
      console.log(data);
      const {id , name,  learned , skill , imgURL ,  repoLink , visitLive, desp }= data;
      return `<div class="project">
                        <div class="image"><img src="${imgURL}" alt="${name}"/> </div>
                        <div class="project-text">
                            <div class ="github-site">
                                <a href="${visitLive}" target="_blank" class="">
                                    <span class="btn-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                                </a>  <a href="${repoLink}" target="_blank" class="">
                                    <span class="btn-icon"><i class="fa-brands fa-github"></i></span>
                                </a>
                            </div>
                            <h4> <a href="${visitLive}" target="_blank">${name} </a> </h4>
                            <h6>Learning : ${learned}</h6>
                            <h6>tool : <span>${skill}<span></h6>
                            <p>${desp}<br></p>
                            
                        </div>
                    </div>`
    }).join('');
    console.log("datastr : ",dataStr);
    return dataStr;
}
export default createCarts;