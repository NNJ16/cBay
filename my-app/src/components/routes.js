import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "../views/Home";
import Dashboard from "../views/Seller/Dashboard";
import AddItemForm from "../views/Seller/AddItem";
import UpdateItemForm from "../views/Seller/UpdateItem";
import SellerRegisterForm from "../views/Seller/SellerRegisterForm";
const hist = createBrowserHistory();
const userType = localStorage.getItem("userType");

const Routes = () => (
    <Router history={hist}>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/sellregister" component={SellerRegisterForm} />
        <Route path="/dashboard" component={userType ==="seller"? Dashboard: null} />
        <Route path="/additem" component={userType ==="seller"? AddItemForm: null} />
        <Route path="/updateitem" component={userType ==="seller"? UpdateItemForm: null} />
        <Route exact path="/" component={userType ===null? LoginForm: Home} />
    </Router>
);

export default Routes;