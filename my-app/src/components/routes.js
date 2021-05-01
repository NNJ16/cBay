import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import AddItemForm from "./Seller/AddItem";
import UpdateItemForm from "./Seller/UpdateItem";

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