import React from "react";
import Card from "../components/Card/card";
import {Grid} from "@material-ui/core";

let itemList = [
    {
        itemID: "1001",
        itemName: "Apple MacBook Air (M1, 2020)",
        imgURL: "https://th.bing.com/th/id/Rf7f8d77db142be913615d75a6448ffa9?rik=s0tK6KSrYRvlpw&pid=ImgRaw",
        description: "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
        price: 240000
    },
    {
        itemID: "1002",
        itemName: "Microsoft Surface Laptop 4",
        imgURL: "https://th.bing.com/th/id/OIP.5AUcv5LgPIpyZ2cT_e3trAHaFG?pid=ImgDet&w=1600&h=1103&rs=1",
        description: "CPU: 11th-generation Intel Core i5 – i7 /AMD Ryzen 5 - 7Graphics: Intel Iris Xe / AMD RadeonRAM: 8GB – 32GB",
        price: 220000
    },{
        itemID: "1001",
        itemName: "Apple MacBook Air (M1, 2020)",
        imgURL: "https://th.bing.com/th/id/Rf7f8d77db142be913615d75a6448ffa9?rik=s0tK6KSrYRvlpw&pid=ImgRaw",
        description: "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
        price: 240000
    },
    {
        itemID: "1002",
        itemName: "Microsoft Surface Laptop 4",
        imgURL: "https://th.bing.com/th/id/OIP.5AUcv5LgPIpyZ2cT_e3trAHaFG?pid=ImgDet&w=1600&h=1103&rs=1",
        description: "CPU: 11th-generation Intel Core i5 – i7 /AMD Ryzen 5 - 7Graphics: Intel Iris Xe / AMD RadeonRAM: 8GB – 32GB",
        price: 220000
    }
];

let cart =[];

const addToCart=(item)=>{
    cart.push(item);
    console.log(cart);
}
export default function Home() {
    return (
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
    );
}