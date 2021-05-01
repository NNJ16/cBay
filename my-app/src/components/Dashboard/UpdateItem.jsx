import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdateItemForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => console.log(data);
    const location = useLocation();

    const [data,setData] = useState("");

    useEffect(() => {
        setData(location.state.data);
    }, [location]);

    const loginForm =()=>{
        history.push("/login");
    };

    return (
        <div>
            <div className="register">
                <Form className="item-form" onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Update Item</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Item ID :</Label>
                        <Input size="sm"  type="text" value={data.itemId} name="name" {...register("firstName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Item Name :</Label>
                        <Input size="sm" type="text" value={data.itemName} name="name" {...register("firstName")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Description :</Label>
                        <Input size="sm" type="textarea" rows="5" value={data.description}name="name" {...register("firstName")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Unit Price :</Label>
                        <Input size="sm" type="text" value={data.price} name="name" {...register("firstName")}/>
                    </FormGroup>
                    <Button className="btnLog" color="primary">Update Item</Button>
                    <Button size="sm" onClick={()=>loginForm()} className="btnReg" color="secondary">Back</Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateItemForm;