import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Projects
import Techly from "./pages/projects/Techly.jsx";
import Modernly from "./pages/projects/Modernly.jsx";
import Appify from "./pages/projects/Appify.jsx";

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/StyledComponents/StyledComponents.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./components/StyledComponents/Theme";

// Google Analytics
import ReactGA from "react-ga";

class App extends Component {

    render () {

        if(window.location.hostname !== "localhost") {
            
            // Google Analytics ID goes here.
            let trackingId = "123";

            ReactGA.initialize(trackingId);
            ReactGA.pageview('/home');
        }


        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <AnimatePresence>
                        <Switch>
                            <Route path="/home" render={props => <Home {...props} />} />
                            <Route path="/contact" render={props => <Contact {...props} />} />
                            <Route path="/about" render={props => <About {...props} />} />
                            <Route path="/techly" render={props => <Techly  {...props} />} />
                            <Route path="/modernly" render={props => <Modernly  {...props} />} />
                            <Route path="/appify" render={props => <Appify  {...props} />} />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'))
