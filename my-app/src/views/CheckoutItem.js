import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

const CheckoutForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => console.log(data);

    const back =()=>{
        history.push("/cart");
    };

    return (
        <div>
            <div className="checkout">
                <Form className="checkoutform" onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Checkout</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>First Name :</Label>
                        <Input size="sm" name="name" {...register("firstName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Last Name :</Label>
                        <Input size="sm" name="name" {...register("lastName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Address Line 1 :</Label>
                        <Input size="sm" name="name" {...register("address1")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Address Line 2 :</Label>
                        <Input size="sm" name="name" {...register("address2")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>City :</Label>
                        <Input size="sm" name="name" {...register("City")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Province :</Label>
                        <Input size="sm" name="name" {...register("province")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Zip/Postal Code :</Label>
                        <Input size="sm" name="name" {...register("zipCode")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Email :</Label>
                        <Input size="sm" type="email" name="email" {...register("email")} />
                    </FormGroup>
                    <div className= "btnInline">
                    <Button size="sm" onClick={()=>back()} className="btnback" color="secondary">Back</Button>
                    <Button className="btnProceed" color="primary">Proceed</Button>
                    </div>
                    
                </Form>
            </div>
        </div>
    );
};

export default CheckoutForm;