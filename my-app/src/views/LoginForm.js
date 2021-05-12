import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LoginForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => {
        localStorage.setItem("userType","user");
    };
    const registerForm =()=>{
        history.push("/register");
    }
    return (
        <div className="register">
            <Header/>
            <Form onSubmit={handleSubmit(handleRegistration)}>
                <h1 className="reg-title">Login</h1>
                <hr/>
                <FormGroup className="input">
                    <Label>Email :</Label>
                    <Input size="sm" type="email" name="email" {...register("email")} />
                </FormGroup>
                <FormGroup>
                    <Label>Password :</Label>
                    <Input size="sm" type="password" name="password" {...register("password")} />
                </FormGroup>
                <Button className="btnLog" color="primary">Login</Button>
                <Button size="sm" onClick={()=>registerForm()} className="btnReg" color="secondary">Register</Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default LoginForm;