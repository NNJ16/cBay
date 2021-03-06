import React, {useState,useEffect} from "react";
import Card from "../components/Card/card";
import {Grid} from "@material-ui/core";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api"


let dataList=[];
let cart =[];


export default function Home() {
    const [itemList,setItems] = useState([]);

    const loadData = () =>{
        API.get("/items").then(res=>{
            let arr = res.data;
            let i;
            for (i = 0; i < arr.length; i++) {
                dataList.push(arr[i])
            }
            setItems(dataList);
        });
    }
    useEffect(loadData,[]);

    const [count,setCount] = useState(0);
    const addToCart=(item)=>{
        cart.push(item);
        setCount(cart.length);
    }
    const findItems= (itemName)=>{
        API.post('/search', {itemName : itemName})
            .then(function (res) {
                let arr = res.data;
                let i;
                let list=[];
                for (i = 0; i < arr.length; i++) {
                    list.push(arr[i])
                }
                setItems(list);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Header findItems={findItems} count={count} cartItems={cart}/>
            <div className="itemList">
                <Grid container spacing={1}>
                    {itemList.map((item) => (
                        <Grid container item xs={4}>
                            <Card key={item.itemID} itemName={item.itemName} description={item.description}
                                  imgURL={item.imgURL} price={item.price} addToCart={addToCart}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer/>
        </div>

    );
}