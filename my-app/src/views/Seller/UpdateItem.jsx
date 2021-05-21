import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import API from "../../components/api";

const UpdateItemForm = () => {
    const history = useHistory();
    const location = useLocation();

    const [data, setData] = useState({
        itemID: "",
        itemName: "",
        imgURL: "",
        description: "",
        price: 0
    });

    useEffect(() => {
        setData(location.state.data);
    }, [location]);

    const loginForm = () => {
        history.push("/login");
    };
    const viewDashboard = () =>{
        history.push("/dashboard");
    }
    const submitData = () => {
        const userId = localStorage.getItem("userId");
        const item={
            itemID : data.itemID,
            itemName : data.itemName,
            imgURL : data.imgURL,
            description : data.description,
            price:data.price,
            userId : userId
        }
        API.put('/updateItem', item)
            .then(function (response) {
                console.log(response);
                viewDashboard();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleData = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            if (name === "itemID") {
                return (
                    {
                        itemID: value,
                        itemName: preValue.itemName,
                        imgURL: preValue.imgURL,
                        description: preValue.description,
                        price: preValue.price
                    }
                );
            } else if (name === "itemName") {
                return (
                    {
                        itemID: preValue.itemID,
                        itemName: value,
                        imgURL: preValue.imgURL,
                        description: preValue.description,
                        price: preValue.price
                    }
                );
            } else if (name === "imgURL") {
                return (
                    {
                        itemID: preValue.itemID,
                        itemName: preValue.itemName,
                        imgURL: value,
                        description: preValue.description,
                        price: preValue.price
                    }
                );
            } else if (name === "description") {
                return (
                    {
                        itemID: preValue.itemID,
                        itemName: preValue.itemName,
                        imgURL: preValue.imgURL,
                        description: value,
                        price: preValue.price
                    }
                );
            } else if (name === "price") {
                return (
                    {
                        itemID: preValue.itemID,
                        itemName: preValue.itemName,
                        imgURL: preValue.imgURL,
                        description: preValue.description,
                        price: value
                    }
                );
            }
        });
    }
    return (
        <div>
            <Header/>
            <div className="register">
                <Form className="item-form">
                    <h1 className="reg-title">Update Item</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Item ID :</Label>
                        <Input size="sm" type="text" onChange={handleData} value={data.itemID} name="itemID" disabled/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Item Name :</Label>
                        <Input size="sm" type="text" onChange={handleData} value={data.itemName} name="itemName"/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Image URL :</Label>
                        <Input size="sm" type="text" onChange={handleData} value={data.imgURL} name="imgURL"/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Description :</Label>
                        <Input size="sm" type="textarea" onChange={handleData} rows="5" value={data.description}
                               name="description"/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Unit Price :</Label>
                        <Input size="sm" type="text" onChange={handleData} value={data.price} name="price"/>
                    </FormGroup>
                    <Button onClick={() => {
                        submitData()
                    }} className="btnLog" color="primary">Update Item</Button>
                    <Button size="sm" onClick={() => loginForm()} className="btnReg" color="secondary">Back</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default UpdateItemForm;