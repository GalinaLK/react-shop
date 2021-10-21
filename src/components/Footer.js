import React from 'react'
import '../Sass/footer.scss'


const Footer = () => {
    return (
        <div className="container-footer">
          <div className="container grid-footer">
              <div className="downloadLinkLabel">
              <label htmlFor="downloadAppStore">download the app on App store</label>
              <a id="downloadAppStore" className="downloadLink" href="#">
                Available on<br/>  
                <i class="fab fa-apple"></i>                
                <span className="mobileStores">App Store</span>
              </a>  
              </div>
              
              <div className="downloadLinkLabel">
              <label htmlFor="downloadGooglePlay">download the app on Google Play</label>
              <a id="downloadGooglePlay" className="downloadLink" href="#">
                Available on<br/> 
                <i class="fab fa-google-play"></i>                
                <span className="mobileStores">Google Play</span>
              </a>    
              </div> 

              <div className="findStoreGroup">
                <label htmlFor="findStore">store locator</label>
                <button id="findStore">find a store</button>
              </div>
            <div className="followUs">
            <p>follow us</p>
            <ul>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-youtube"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-tiktok"></i></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
