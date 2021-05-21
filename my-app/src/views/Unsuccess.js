import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Unsuccess = () => {

    return (
        <div >
            <Header/>
            <div className="unsuccess">
                <div className="alert-danger">
                    <h3> Your Order is Unsuccessful!</h3>
                </div>
                <p className="message">
                <b>Please check the details again that you have entered </b><br /><br />

                        There is error while placing the order. Plese try again. If you have any Inquiry, please use the telephone number or email address listed below to talk to one of our staff members. 
                        <br /><br />
                        We will make sure to reply your message as soon as possible.
                        <br /><br />
                        Thank you [ cBay (Pvt) Ltd ]
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Unsuccess;