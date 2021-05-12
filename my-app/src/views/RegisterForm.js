import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RegisterForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => console.log(data);

    const loginForm =()=>{
        history.push("/login");
    };

    return (
        <div>
            <Header/>
            <div className="register">
                <Form onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Register</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Name :</Label>
                        <Input size="sm" name="name" {...register("firstName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Email :</Label>
                        <Input size="sm" type="email" name="email" {...register("email")} />
                    </FormGroup>
                    <FormGroup >
                        <Label>Password :</Label>
                        <Input size="sm" type="password" name="password" {...register("password")} />
                    </FormGroup>
                    <Button className="btnLog" color="primary">Register</Button>
                    <Button size="sm" onClick={()=>loginForm()} className="btnReg" color="secondary">Login</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default RegisterForm;