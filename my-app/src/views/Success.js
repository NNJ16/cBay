import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Success = () => {

    return (
        <div >
            <Header/>
            <div className="success">
                <div className="alert-success">
                    <h3> Your Order is Successfully Placed!</h3>
                </div>
                <p className="message">
                <b>Thanks for being awesome! </b><br /><br />

                        We have received your order Details and would like to thank you for shopping with us. If your inquiry is urgent, please use the telephone number or email address listed below to talk to one of our staff members. 
                        <br /><br />
                        We will make sure to send your package as soon as possible.
                        <br /><br />
                        Thank you [ cBay (Pvt) Ltd ]
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Success;