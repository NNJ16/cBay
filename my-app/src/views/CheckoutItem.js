import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import API from "../components/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



        
                let date = new Date().getDate();
                let month = new Date().getMonth() + 1;
                let year = new Date().getFullYear();
          
        
            const cart1 = JSON.parse(localStorage.getItem("cart")); //get cart item back

            const tot = localStorage.getItem("total");
            console.log(date + '-' + month + '-' + year);



            //add orders to backend
    
    const CheckoutForm = () => {const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleCheckout = (data) => {
       
        const order ={
            
        orderUid : localStorage.getItem("userId"),
        username :data.fullName,
        orderDesc : cart1,
        orderAddress : data.address,
        city : data.City,
        zipcode : data.zipCode,
        province : data.province,
        orderPrice: tot,
        orderDate : date + '-' + month + '-' + year,
        paymentType:SelectPayType,
        deliveryStatus:"Pending",
    
        }
        console.log(order);
        API.post('/addOrder', order)
            .then(function (response) {
                console.log(response);
                 Proceed ();
            })
            .catch(function (error) {
                console.log(error);
            });
                };

    let payType="/success" // -----------------------------------------
    let SelectPayType="Cash"

    const Proceed =()=>{
        history.push(payType);
    };
    const back = () =>{
        history.push("/cart");
    }

  const  setGender=(e)=>{
        console.log(e.target.value);
        
      }

      const  setPaymentType=(e)=>{

        if(e.target.value =="Cash"){
        
            payType="/success";// ---------------------------------------
            SelectPayType="Cash";

        }else if(e.target.value=="Card"){

            payType="/orderItems";// ------------------------------------
            SelectPayType="Credit Card";
    }
}

    return (
        <div>
            <Header/>
            <div className="checkout">
                <Form className="checkoutform" onSubmit={handleSubmit(handleCheckout)}>
                    <h1 className="reg-title">Checkout</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label className="lb">Full Name :</Label>
                        <Input type="text" size="sm" name="name" required placeholder="Full Name"{...register("fullName")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label className="lb">Address :</Label><br></br>
                        <textarea id="textAddress" type="text" required  placeholder="Address" size="sm" name="name" {...register("address")} />
                    </FormGroup>
                    <div className="addressPart">
                    <FormGroup >
                        <Label className="lb">City :</Label>
                        <Input  type="text" size="sm" required placeholder="City"  name="name" {...register("City")} />
                    </FormGroup>
                    <FormGroup >
                        <Label className="lb">Province :</Label>
                        <Input  type="text" size="sm" required placeholder="Province" name="name" {...register("province")} />
                    </FormGroup>
                    <FormGroup >
                        <Label className="lb">Zip Code :</Label>
                        <Input placeholder="Zip Code" required placeholder="Zip Code" size="sm" name="name" {...register("zipCode")} />
                    </FormGroup>
                    </div>
                  
                    <FormGroup className="input">
                        <Label className="lb">Payment Type :</Label>
                        <br></br>
                        <div onChange={setPaymentType.bind(this)}>
                              <input id="radioInput" type="radio" defaultChecked value="Cash" name="paymentType"/> Cash  
                              <input id="radioInput" type="radio" value="Card" name="paymentType"/> Credit Card
                        </div>
                    
                    </FormGroup><br></br>
                    <div className= "btnInline">
                    <Button size="sm" onClick={()=>back()} className="btnback" color="secondary">Back</Button>
                    <Button className="btnProceed"  color="primary">Proceed</Button>
                    </div>
                    
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default CheckoutForm;