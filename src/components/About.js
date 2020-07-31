import React from 'react';
import Footer from './Footer';

class About extends React.Component{

    render(){

        return(

            <div className="page" id="p2">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

                <div className="uk-flex uk-margin-medium-top">
                    <div className="uk-card uk-card-body">
                        <img src="img/about-us.png" alt="Brayan Manzano" width="400" height="400"/>
                    </div>
                    <div className="uk-card uk-card-body uk-width-large about">
                        <h2 className="uk-h2 me">LET ME INTRODUCE MYSELF</h2>
                        <p className="uk-text-bold uk-text-justify"><em>Web Designer and Developer.</em>
                        <br/>
                            I'm  an ICT Engineer, Frontend & Backend Developer with more than three years of experience in professional web development and multiple web projects with PHP by  using Laravel and Javascript with  jQuery or Frameworks such as  React.js, SQL and NoSQL database management, also I have worked with Bootstrap, foundation, Spectre that are  CSS Frameworks to design web-pages.        
                        </p>
                    </div>

                    <div className="links uk-card uk-card-body uk-width-medium">
                        <Footer/>  
                    </div>
                </div>
                
            </div> 

        )
    }
}

export default About;