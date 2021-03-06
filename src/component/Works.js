import React from 'react';

const Works = () => {
    const tableStyle =  {
        background: "white",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom:"12rem"

    }

    return (<div>
      
        <section id="works" className="s-works target-section">
        <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
            <h3>Portfolio</h3>
            <h1>See My Latest Projects.</h1>
            
            <p className="lead">The table below shows some of my projects and few others I contributed in creating.
            There are some other works which are not in the table, but can be found on my  <cite><a href="https://www.github.com/Tenica"><strong>github</strong></a></cite> profile</p>
        </div>
    </div>
        <div className ="table-responsive" style={tableStyle}>

                    <table>
                            <thead>
                            <tr>
                                <th>Project</th>
                                <th>Description</th>
                                <th>URL</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>cic09</td>
                                <td>Alumni Website</td>
                                <td><a href="https://www.cic09.com">www.cic09.com</a></td>
                            </tr>
                            <tr>
                                <td>Bettapoint.com</td>
                                <td>Betting site</td>
                                <td><a href="https://www.bettapoint.com">www.Bettapoint.com</a></td>
                            </tr>
                            <tr>
                                <td>chikaonyema</td>
                                <td>portfolio website</td>
                                <td><a href="https://www.chikaonyema.com">www.chikaonyema.com</a></td>
                            </tr>
                            <tr>
                                <td>playjoor</td>
                                <td>gaming website</td>
                                <td><a href="http://playjoor.com/">www.playjoor.com</a></td>
                            </tr>
                            <tr>
                                <td>writers.ng</td>
                                <td>Educational services</td>
                                <td><a href= "http://writers.ng/">www.writers.ng</a></td>
                            </tr>
                            </tbody>
                    </table>

                </div>
        
        </section>
        

            
            
        </div> );
}
 
export default Works;