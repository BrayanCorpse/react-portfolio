import React from 'react';

class Footer extends React.Component{

    render(){

        return(


            

                    <ul id="menu">
                        {/* Links */}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bryan.manzanocortes" >
                            <li id="uno" className="icon">
                                <span className="link facebook" uk-icon="icon: facebook; ratio: 2"></span>
                            </li>
                        </a>
                                                
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BrayanCorpsee">
                            <li id="dos" className="icon">
                                <span className="link twitter" uk-icon="icon: twitter; ratio: 2"></span>
                            </li>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bryan.devcode/">
                            <li id="tres" className="icon">
                                <span className="link instagram" uk-icon="icon: instagram; ratio: 2"></span>
                            </li>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="/">
                            <li id="cuatro" className="icon">
                                <span className="link youtube" uk-icon="icon: youtube; ratio: 2"></span>
                            </li>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/BrayanCorpse">
                            <li id="cinco" className="icon">
                                <span className="link github" uk-icon="icon: github; ratio: 2"></span>
                            </li>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brayan-manzano-cortes-54b309129/">
                            <li id="seis" className="icon">
                                <span className="link linkedin" uk-icon="icon: linkedin; ratio: 2"></span>
                            </li>
                        </a>
                        {/* End Links */}
                    </ul>
                  
                
        )
    }
}

export default Footer;