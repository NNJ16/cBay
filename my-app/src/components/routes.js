import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import Home from "../views/Home";
import Dashboard from "../views/Seller/Dashboard";
import AddItemForm from "../views/Seller/AddItem";
import UpdateItemForm from "../views/Seller/UpdateItem";
import Checkout from '../views/Checkout';
import AddressForm from '../views/AddressForm';
import Review from '../views/Review';
import PaymentForm from '../views/PaymentForm';

const hist = createBrowserHistory();

const Routes = () => (
    <Router history={hist}>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/additem" component={AddItemForm} />
        <Route path="/updateitem" component={UpdateItemForm} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/addressform" component={AddressForm} />
        <Route path="/review" component={Review} />
        <Route path="/paymentform" component={PaymentForm} />

        
        <Route exact path="/" component={Home} />
    </Router>
);

export default Routes;