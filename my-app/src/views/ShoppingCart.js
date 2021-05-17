import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button, Container,Row,Col} from "reactstrap";
import Card from "../components/Card/card";
import {Grid} from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const ShoppingCart = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => console.log(data);

    
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "#01406e",
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    
    function createData(itemId, itemName,imgURL, description,qty, price) {
        return {itemId, itemName,imgURL, description,qty, price};
    }
    
    const rows = [
        createData(10001,
            "Apple MacBook Air (M1, 2020)",
            "https://th.bing.com/th/id/Rf7f8d77db142be913615d75a6448ffa9?rik=s0tK6KSrYRvlpw&pid=ImgRaw",
            "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
            2, 
            240000.00),
        createData(10002,
            "Microsoft Surface Laptop 4 ",
            "",
            "CPU: 11th-generation Intel Core i5 – i7 /AMD Ryzen 5 - 7Graphics: Intel Iris Xe / AMD RadeonRAM: 8GB – 32GB",
            5,
            220000.00)
    ];
    
    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    
    const deleteItem= (id)=>{
        console.log("ID : "+id);
    }
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



   
    const shoppingCart =()=>{
        history.push("/cart");
    };
    
    const classes = useStyles();
    return (  
    


    <div>

        <div className="shoppingCart">
            <h1 className="cart-title">Shopping Cart</h1>

            <Container className="themed-container" >
           <Row>
            <Col className="item" lg="8" >
            <h3>Cart ({rows.length})</h3>
            <div className="itemListcart">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Item Name</StyledTableCell>
                            <StyledTableCell align="left">Item Description</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Actions</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.itemName}>
                                <StyledTableCell component="th" scope="row">
                                    {row.itemName}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}</StyledTableCell>
                                <StyledTableCell align="left">{row.qty}</StyledTableCell>
                                
                                <StyledTableCell align="left"><Button onClick={()=>{
                                    console.log(row.itemName)
                                }}><DeleteIcon /></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
                </Col>
           
                
            <Col className="check"  xs="3" >
                <h4 className="order">Order Summary </h4>
                <Row>

                   <Row> <div className="ordersum">

                        <table>
                            <tr >
                                <td>SubTotal ({rows.length} Items)</td>
                                <td className="order-d"> Rs 150000</td>
                                
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="order-d"> Rs 0</td>

                            </tr>
                        

                            <tr>
                                <td>Total</td>
                                <td className="order-d"> Rs 150000</td>

                            </tr>

                        </table>

                    </div>
                    </Row>
                    <Col className="check-out">
                        <Button className="check-o" onClick={()=>{
                            history.push("/checkoutitem")
                        }}>Check out</Button>
                    </Col>
                </Row>
                </Col>
                
                </Row> 
               
                    
                  
            </Container>
                  

                                  

        </div>
        



    </div> );
}
 
export default ShoppingCart;