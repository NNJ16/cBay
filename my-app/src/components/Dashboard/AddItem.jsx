import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

const AddItemForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => console.log(data);

    const loginForm =()=>{
        history.push("/login");
    };

    return (
        <div>
            <div className="register">
                <Form className="item-form" onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Add Item</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Item ID :</Label>
                        <Input size="sm"  type="text" name="name" {...register("firstName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Item Name :</Label>
                        <Input size="sm" type="text" name="name" {...register("firstName")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Description :</Label>
                        <Input size="sm" type="text" name="name" {...register("firstName")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Unit Price :</Label>
                        <Input size="sm" type="text" name="name" {...register("firstName")}/>
                    </FormGroup>
                    <Button className="btnLog" color="primary">Add Item</Button>
                    <Button size="sm" onClick={()=>loginForm()} className="btnReg" color="secondary">Back</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItemForm;