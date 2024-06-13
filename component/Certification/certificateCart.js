function ceritificateCartf(certificateData){
    const ceritificateCartStr = certificateData.map((certicate)=>{
        const {
            id, title, imgURL, certificateURL , instructorName,  }= certicate;
        return `
        <div class="portfolio-item">
                    <a href="${certificateURL}" class="main-btn certi" target="_blank">
                        <div class="image">
                            <img src="${imgURL}" alt="${title}">
                        </div></a>

                    <div class="hover-items">
                        <a href="${certificateURL}" class="main-btn certi" target="_blank">
                            <h3>${title}</h3>
                        </a>
                       
                        <div class="icons">
                                <div class="btn-con">
                                    <a href="${certificateURL}"target="_blank" class="main-btn certi">
                                        <span class="btn-text">Certificate</span>
                                        <span class="btn-icon"><i class="fa-solid fa-up-right-from-square"></i></span>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
        `;
    }).join(' ');
    return ceritificateCartStr;
}
export default ceritificateCartf;