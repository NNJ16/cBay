import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "./Home/Home";

const hist = createBrowserHistory();

const Routes = () => (
    <Router history={hist}>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route exact path="/" component={Home} />
    </Router>
);

export default Routes;