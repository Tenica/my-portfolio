import React from 'react';
import moment from 'moment'


const Home = () => {

    function greeting() {
        const hour = moment().hour();

        if (hour > 16){
            return "Good evening";
        }

         if (hour > 11){
             return "Good afternoon";
         }

         return 'Good morning';
    }


    return ( <div>
        
        <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width="3000" data-natural-height= "2000" data-position-y= "center">

        <div className="overlay"></div>
        <div className="shadow-overlay"></div>

        <div className="home-content">

            <div className="row home-content__main">

                <h3>Hello {greeting()}</h3>

                <h1>
                    I am Onyema Chika V. <br />
                    I am a Web <br />
                    developer based in Nigeria.
                </h1>

                <div className="home-content__buttons">
                    <a href="#works" className="smoothscroll btn btn--stroke">
                        Latest Projects
                    </a>
                    <a href="#about" className="smoothscroll btn btn--stroke" >
                        More About Me
                    </a>
                </div>

                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>

            </div>

        </div> 

        <ul className="home-social">
        <li>
            <a href="https://m.facebook.com/chika.onyema?ref=bookmarks"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
        </li>
        <li>
            <a href="https://www.twitter.com/sonof_Anarkhist"><i className="im im-twitter" aria-hidden="true"></i><span>Twitter</span></a>
        </li>
        <li>
            <a href="https://wa.me/2347030586560"><i className="im im-whatsapp" aria-hidden="true"></i><span>Instagram</span></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/chika-onyema-164114201"><i className="im im-linkedin" aria-hidden="true"></i><span>Linkedin</span></a>
        </li>
        <li>
            <a href="https://www.github.com/Tenica"><i className="im im-github" aria-hidden="true"></i><span>Github</span></a>
        </li>
    </ul> 
    
        
      </section>  
        </div> );
}
 
export default Home;