import React from 'react';
import {render} from 'react-dom';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import Link from "./components/Link";
import Footer from "./components/Footer";
import * as Page from "./pages";
import "./style.css";

class App extends React.Component {
    componentDidMount() {
        document.title = "";
    }
    render() {
        return (<BrowserRouter>
            <React.Fragment>
                <Nav>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/social">
                        Social
                    </NavLink>
                </Nav>
                <main>
                    <Route path="/" exact={true} component={Page.Home}/>
                    <Route path="/social" component={Page.Social}/>
                    <Route path="/projects" component={Page.Projects}/>
                </main>
                <Footer>
                    &copy; 2018 - Made proudly from scratch using Materialize, React, and Webpack4.
                    <Link to="https://github.com/LaughDonor/react-webpack4-boilerplate">GitHub</Link>
                </Footer>
            </React.Fragment>
        </BrowserRouter>);
    }
};
render(<App/>, document.getElementById("app"));
