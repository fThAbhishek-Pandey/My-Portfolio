function blogCartf(blogsData){
    const blogCartStr = blogsData.map ((blog)=>{
        const {id , title, link,imgURL,} = blog;
        return `
        <div class="portfolio-item">
            <a href="${link}">
                <div class="image">
                    <img src="${imgURL}" alt="${title}">
                </div></a>

            <div class="hover-items">
                <a href="${link}" target="_blank" class="main-btn certi" target="_blank">
                    <h3>${title}</h3>
                </a>
               
                <div class="icons">
                        <div class="btn-con">
                            <a href="${link}">
                                <span class="btn-text">Read Now</span>
                                <span class="btn-icon"><i class="fa-solid fa-up-right-from-square"></i></span>
                            </a>
                        </div>
                </div>
            </div>
        </div>
        `;
    }).join(' ');
    return blogCartStr;
}
export default blogCartf;