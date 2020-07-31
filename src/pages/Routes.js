import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Github from '../components/Github';
import Contact from '../components/Contact';

class Routes extends React.Component{

    render(){

        return(

        <Router>

            <section>

                <ul id="menu">

                    <Link to="/">
                        <li id="uno" className="icon">
                            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>
                                            
                    <Link to="/About">
                        <li id="dos" className="icon">
                            <i className="fa fa-male fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>

                    <Link to="/Services">
                        <li id="tres" className="icon">
                            <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>

                    <Link to="/Projects">
                        <li id="cuatro" className="icon">
                            <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>

                    <Link to="/Github">
                        <li id="cinco" className="icon">
                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>

                    <Link to="/Contact">
                        <li id="seis" className="icon">
                            <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                        </li>
                    </Link>

                    <Link to="/">
                        <li id="uno" className="icon">
                            <img src="img/iconbsmall.svg" alt="Brayan Manzano"/>
                        </li>
                    </Link>
                </ul>      

                                             
                            
            </section>


                <Switch>

                    <Route exact path="/" component={Home}/>

                    <Route exact path="/About" component={About}/>

                    <Route exact path="/Services" component={Services}/>

                    <Route exact path="/Projects" component={Projects}/>

                    <Route exact path="/Github" component={Github}/>

                    <Route exact path="/Contact" component={Contact}/>


                </Switch>
                

        </Router>
        )
    }
}

export default Routes;
  