import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import AddItemForm from "./Dashboard/AddItem";
import UpdateItemForm from "./Dashboard/UpdateItem";

const hist = createBrowserHistory();

const Routes = () => (
    <Router history={hist}>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/additem" component={AddItemForm} />
        <Route path="/updateitem" component={UpdateItemForm} />
        <Route exact path="/" component={Home} />
    </Router>
);

export default Routes;