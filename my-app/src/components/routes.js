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
import OrderItems from '../views/OrderItems';
import ItemCart from '../views/ItemCart';
import CheckoutItem from '../views/CheckoutItem';
import Success from '../views/Success';
import Unsuccess from '../views/Unsuccess';
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

        <Route path="/orderItems" component={userType ==="user"? OrderItems: null} />
        <Route path="/checkoutItem" component={userType ==="user"? CheckoutItem:null} />
        <Route path="/itemCart" component={userType ==="user"? ItemCart: null} />

        <Route path="/success" component={userType ==="user"? Success:null} />
        <Route path="/unsuccess" component={userType ==="user"? Unsuccess: null} />
    </Router>
);

export default Routes;