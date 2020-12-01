import React from 'react';


const Testimony = () => {
    return ( <div>
        <div className="s-testimonials">

        <div className="overlay"></div>

        <div className="row testimonials-header">
            <div className="col-full">
                <h1 className="h02">Referees.</h1>
            </div>
        </div>

        <div className="row testimonials">

            <div className="col-full testimonials__slider">

                <div className="testimonials__slide">
                    <img src="images/avatars/user-01.jpg" alt="Author" className="testimonials__avatar" />
                    <p>As a student and intern, Chika was attentive, willing to learn, dedicated and hardworking.<br/>
                    As a staff Chika works well with his colleagues, humble and diligent.</p>
                    <div className="testimonials__author h06">
                        Mr.Sab-Udeh Chukwumdimma
                        <span>CEO, Kierian Technology</span>
                    </div>
                </div>

                <div className="testimonials__slide">
                    <img src="images/avatars/user-05.jpg" alt="Author" className="testimonials__avatar" />
                    <p>Chika was a good staff, always willing to learn and focused.Though a young web developer, 
                    he has the qualities needed in a web developer in an organization</p>
                    <div className="testimonials__author h06">
                        Mr.Ebuka Ochoko
                        <span>CEO, Naurix</span>
                    </div>
                </div>

                <div className="testimonials__slide">
                    <img src="images/avatars/user-02.jpg" alt="Author" className="testimonials__avatar" />
                    <p>Working with Chika on some projects made me see how hardworking and dedicated he can be,I know he will make as good staff and a great web developer.</p>
                    <div className="testimonials__author h06">
                        Mr.Nnona Ferdinand
                        <span>Web developer at Charms</span>
                    </div>
                </div>
                
            </div> 
        </div> 
    </div> 
        
        </div> );
}
 
export default Testimony;