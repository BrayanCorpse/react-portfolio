import React from 'react';
import Footer from './Footer';

class Home extends React.Component{

    state ={

        images:{
        developer:'img/developer.png',
        iconbbig:'img/iconbbig.svg',
        iconsmall:'img/iconbsmall.svg',
        webdev:'img/webdev.svg'
        }
        
    }

    render(){

        const {images} = this.state;

        return(

            <div className="page" id="p1">

                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

                <div className="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-margin-medium">
                    <div className="uk-animation-toggle">

                        <img className="uk-animation-fade" src={images.developer} alt=""/>

                        <h1 className="uk-text-center uk-animation-toggle">
                            Brayan <img className="uk-border-rounded uk-animation-scale-down" src={images.iconsmall} alt="Brayan Manzano"/> Manzano
                        </h1>

                        <h2 className="uk-text-center uk-animation-toggle uk-margin-remove-top">Web Developer <img className="uk-animation-scale-up" src={images.webdev} alt="Brayan Manzano Web Developer"/>
                        {/* <br/>
                            <button className="uk-button uk-button-w def uk-button-small">ABOUT ME</button> */}
                        </h2>

                    </div>
                </div>
                
                <div className="footer">
                    <Footer/>  
                </div>
                          
            </div>
        )
    }
}

export default Home;