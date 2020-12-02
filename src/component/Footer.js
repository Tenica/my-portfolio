import React from 'react';


const Footer = () => {
    return ( <div>
        <footer>
        <div className="row">
            <div className="col-full">

                <div className="footer-logo">
                    <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
                </div>

                <ul className="footer-social">
                    <li><a href="https://m.facebook.com/chika.onyema?ref=bookmarks">
                        <i className="im im-facebook" aria-hidden="true"></i>
                        <span>Facebook</span>
                    </a></li>
                    <li><a href="https://www.twitter.com/sonof_Anarkhist">
                        <i className="im im-twitter" aria-hidden="true"></i>
                        <span>Twitter</span>
                    </a></li>
                    <li><a href="https://wa.me/2347030586560">
                        <i className="im im-whatsapp" aria-hidden="true"></i>
                        <span>Whatsapp</span>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/chika-onyema-b55741200">
                        <i className="im im-linkedin" aria-hidden="true"></i>
                        <span>linkedin</span>
                    </a></li>
                    <li><a href="https://www.github.com/Tenica">
                        <i className="im im-github" aria-hidden="true"></i>
                        <span>Github</span>
                    </a></li>
                </ul>
                    
            </div>
        </div>

        <div className="row footer-bottom">

            <div className="col-twelve">
                <div className="copyright">
                    <span>© Copyright Chika 2017</span> 
                    
                </div>

                <div className="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i> </a>
                </div>
            </div>

        </div> 

    </footer> 
        
        
        
        </div> );
}
 
export default Footer;