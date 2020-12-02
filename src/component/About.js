import React from 'react';

const About = () => {
    return ( <div>
        <section id="about" className ="s-about target-section">
        
        <div className ="row narrow section-intro has-bottom-sep">
            <div className ="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className ="lead">I am 28 years old, a native of Obiọma in Ụdị local government area of Enugu state in
                 Nigeria. I am highly adaptive with potential drive to learn and adopt innovative ideas, for <q>an investment in knowledge
                always pays the best interest.</q>-
                <cite><a href="https://en.wikipedia.org/wiki/Benjamin_Franklin"><strong>Benjamin Franklin</strong></a></cite></p>
            </div>
        </div>

        <div className ="row about-content">

            <div className ="col-six tab-full left">
                <h3>Howdy!</h3>

                <p>As a self taught programmer,I started learning programming after my NYSC (National Youth Service Corps) in the year 2017 and 
                it has been a wonderful experience so far.</p>

                <p>Yes I know it can be frustrating especially those errors!But i had a good mentor Mr.Sab Udeh Chukwumdimma C.E.O Kierian Technology 
                who guided, encouraged and assisted me with materials which was instrumental to my learning and still of 
                great value to me. I also imbided in myself a spirit of self-discipline amd had a strong passion and desire to learn.
                For HTML5 and CSS3 I learnt from Channel 9 tutorials by Bob Tabor (Senior Porgram Manager-Microsoft) and W3schools.
                I also downloaded alot of free courses on Youtube.</p>
                <p>For Javascript,Node.js,Express and React.js,tutorials of Andrew Mead from Udemy which I bought helped me alot
                in unserstanding the concept of Javacript and its various frameworks. I also downloaded courses on Youtube which were very
                helpful. Websites like stackoverflow, Medium, Dev etc also helped me and still assist me till this day.My work experience, 
                including internship which can be found on my CV, also helped in widening my experience in programming work; 
                just as the saying goes,<q>Experience is the best teacher</q></p>
            </div>

            <div className ="col-six tab-full right">
                <h3>I've Got Some skills.</h3>

                <ul className ="skill-bars">
                    <li>
                    <div className ="progress percent90"><span>90%</span></div>
                    <strong>HTML5</strong>
                    </li>
                    <li>
                    <div className ="progress percent85"><span>85%</span></div>
                    <strong>CSS3</strong>
                    </li>
                    <li>
                    <div className ="progress percent90"><span>90%</span></div>
                    <strong>Bootstrap5</strong>
                    </li>
                    <li>
                    <div className ="progress percent70"><span>70%</span></div>
                    <strong>JavaScript</strong>
                    </li>
                    <li>
                    <div className ="progress percent70"><span>70%</span></div>
                    <strong>jQuery</strong>
                    </li>
                    <li>
                    <div className ="progress percent95"><span>95%</span></div>
                    <strong>React.js</strong>
                    </li>
                    <li>
                    <div className ="progress percent75"><span>75%</span></div>
                    <strong>Node.js</strong>
                    </li>   
                    <li>
                    <div className ="progress percent90"><span>90%</span></div>
                    <strong>Express</strong>
                    </li> 
                    <li>
                    <div className ="progress percent75"><span>75%</span></div>
                    <strong>MongoDb</strong>
                    </li> 
                   
                </ul>
            </div>

        </div> 

    

        <div className ="row about-content about-content--buttons">

            <div className ="col-six tab-full left">
                <a href="images/myCV.pdf" download="Onyema-Chika.pdf" className ="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className ="col-six tab-full right">
                <a href="#0" className ="btn full-width">Hire Me Now</a>
            </div>

        </div> 

        <div className ="row about-content about-content--timeline">

            <div className ="col-full text-center">
                <h3>My Work Experience.</h3>
            </div>

            <div className ="col-six tab-full left">
                <div className ="timeline">

                    <div className ="timeline__block">
                        <div className ="timeline__bullet"></div>
                        <div className ="timeline__header">
                            <p className ="timeline__timeframe">July 2019 - Present</p>
                            <h3>Kierian Technologies</h3>
                            <h5>Web Developer</h5>
                        </div>
                        <div className ="timeline__desc">
                            <p>Back at Kierian Technologies, i resumed work on the 13th of March 2019 as a software developer.
                            I work with an awesome team of developers and have gained a lot of experience on the job.
                            I also work as an I.T manager with the beting site.<cite><a href="https://www.bettapoint.com/">Bettapoint.</a></cite></p>
                        </div>
                    </div> 

                    <div className ="timeline__block">
                        <div className ="timeline__bullet"></div>
                        <div className ="timeline__header">
                            <p className ="timeline__timeframe">July 2014 - June 2015</p>
                            <h3>Naurix Technologies</h3>
                            <h5>Web Developer</h5>
                        </div>
                        <div className ="timeline__desc">	
                            <p>Here, i worked as a web developer.In Naurix, i gained alot of hands-on experience working 
                            on several projects.I also had the time to learn more about Javascript, i meet more complex challenges
                            but in the end it was always fun,especially when a project is successfully devlivered.</p>
                        </div>
                    </div> 

                </div> 
            </div> 

            <div className ="col-six tab-full right">
                <div className ="timeline">

                    <div className ="timeline__block">
                        <div className ="timeline__bullet"></div>
                        <div className ="timeline__header">
                            <p className ="timeline__timeframe">June 2018 - September 2019</p>
                            <h3>Kierian Technology</h3>
                            <h5>Internship</h5>
                        </div>
                        <div className ="timeline__desc">
                            <p>As an intern I had to learn the basics of programming,
                            here I had access to materials which was helpful in my learning process.</p>
                        </div>
                    </div> 

                    <div className ="timeline__block">
                        <div className ="timeline__bullet"></div>
                        <div className ="timeline__header">
                            <p className ="timeline__timeframe">May 2017 - June 2018</p>
                            <h3>PZ Wilmar</h3>
                            <h5>Sales Representative</h5>
                        </div>
                        <div className ="timeline__desc">
                            <p>Right after my NYSC i worked as a sales representative for PZ Wilmar under a Key Distributor at Onitsha,Anambra State.
                            While working as a sales rep, i still created time to learn programming and also save enough money for my internship
                            program.</p>
                        </div>
                    </div> 

                </div> 
            </div> 
        </div> 

    </section> 
        
        
        </div> );
}
 
export default About;