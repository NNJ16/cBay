import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "../views/Home";
import Dashboard from "../views/Seller/Dashboard";
import AddItemForm from "../views/Seller/AddItem";
import UpdateItemForm from "../views/Seller/UpdateItem";

const hist = createBrowserHistory();
const userType = localStorage.getItem("userType");

const Routes = () => (
    <Router history={hist}>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/dashboard" component={userType ==="admin"? Dashboard: null} />
        <Route path="/additem" component={AddItemForm} />
        <Route path="/updateitem" component={UpdateItemForm} />
        <Route exact path="/" component={Home} />
    </Router>
);

export default Routes;