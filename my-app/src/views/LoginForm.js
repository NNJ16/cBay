import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api";

const LoginForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => {
        API.post("/login",data).then(res=>{
            console.log(res.data);
            if(res.data.length > 0){
                const userId = res.data[0].userId;
                const userType = res.data[0].type;
                localStorage.setItem("userType",userType);
                localStorage.setItem("userId",userId);
                if(userType==="user"){
                    viewHome();
                }else{
                    viewDashboard();
                }
            }
        });

    };
    const registerForm =()=>{
        history.push("/register");
    }
    const viewHome =()=>{
        history.push("/");
    }
    const viewDashboard =()=>{
        history.push("/dashboard");
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