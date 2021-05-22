import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import API from "../../components/api";

const AddItemForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => {
        const userId = localStorage.getItem("userId");
        const item={
            itemName : data.itemName,
            imgURL : data.imgURL,
            description : data.description,
            price:data.price,
            userId : userId
        }
        API.post('/addItem', item)
            .then(function (response) {
                console.log(response);
                viewDashboard();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const loginForm = () => {
        history.push("/login");
    };

    const viewDashboard = () =>{
        history.push("/dashboard");
    }
    return (
        <div>
            <Header/>
            <div className="register">
                <Form className="item-form" onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Add Item</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Item Name :</Label>
                        <Input size="sm" type="text" name="itemName" {...register("itemName")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Image URL :</Label>
                        <Input size="sm" type="text" name="imgURL" {...register("imgURL")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Description :</Label>
                        <Input size="sm" type="textarea" rows="5" name="description" {...register("description")}/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Unit Price :</Label>
                        <Input size="sm" type="text" name="price" {...register("price")}/>
                    </FormGroup>
                    <Button className="btnLog" color="primary">Add Item</Button>
                    <Button size="sm" onClick={() => loginForm()} className="btnReg" color="secondary">Back</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default AddItemForm;