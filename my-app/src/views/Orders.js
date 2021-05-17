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
            backgroundColor: "#2b366e",
            color: theme.palette.common.white,
            fontSize: 16,
            fontWeight:"bold"
        },
        body: {
            fontSize: 15,
        },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    
    function createData(orderId, orderName,qty,description,orderAddress,city,province,zipCode,orderPrice,orderDate,orderStatus) {
        return {orderId, orderName,qty,description,orderAddress,city,province,zipCode,orderPrice,orderDate,orderStatus};

    }
    
    const rows = [
        createData(10001,
            "Apple MacBook Air (M1, 2020)",
            "1",
            "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
            "Matara-Matara",
            "Matara",
            "Southern",
            "81000",
           " 240000.00",
            "2021/05/01",
            "done"),

        createData(10002,
            "Apple MacBook Pro(M1, 2020)",
            "1",
            "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
            "Matara,Hakmana,sdfsfsff",
            "Matara",
            "Southern",
            "81000",
            340000.00,
            "2021/04/01",
            "Pending"),
            createData(10003,
                "Asus ROG",
                "1",
                "CPU:  I7-core /8-core GPURAM: 8GB – 16GB",
                "Gale,Hakmana,hhhhhhhhh",
                "Galee",
                "Southern",
                "81000",
                140000.00,
                "2020/04/01",
                "Delivered"),
    ];
    
    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    
    const deleteItem= (id)=>{
        console.log("ID : "+id);
    }
    let orderList = [
        {
            orderID: "1001",
            orderName: "Apple MacBook Air (M1, 2020)",
            orderAddress: "https://th.bing.com/th/id/Rf7f8d77db142be913615d75a6448ffa9?rik=s0tK6KSrYRvlpw&pid=ImgRaw",
            description: "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB",
            orderDate:"2021/12/23",
            orderPrice: 240000,
            orderStatus:"Done"
        },
    ];

    
let cart =[];

const addToCart=(item)=>{
    cart.push(item);
    console.log(cart);
}



   
    const Orders =()=>{
        history.push("/cart");
    };
    
    const classes = useStyles();
    return (  
    


    <div>

        <div className="OrderList">
            <h1 className="cart-title">Order History</h1>
            
           <Row>
            <Col className="item" lg="20" >
            <h4>Recent Orders ({rows.length})</h4>
            <div className="itemListcart">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Item Name</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left"> Address</StyledTableCell>
                           {/* <StyledTableCell align="left">City</StyledTableCell>
                            <StyledTableCell align="left">Province</StyledTableCell>
    <StyledTableCell align="left">Zip Code</StyledTableCell>*/}
                            <StyledTableCell align="left"> Price</StyledTableCell>
                            <StyledTableCell align="left">Order Date</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="center">Tracking</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.orderName}>
                                <StyledTableCell component="th" scope="row">{row.orderName}</StyledTableCell>
                                <StyledTableCell align="left">{row.qty}</StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.orderAddress}, <br></br>{row.city} <br></br>{row.province}<br></br><br></br> {row.zipCode}</StyledTableCell>
                              {/* <StyledTableCell align="left">{row.city}</StyledTableCell>
                                <StyledTableCell align="left">{row.province}</StyledTableCell>
                        <StyledTableCell align="left">{row.zipCode}</StyledTableCell>}*/}
                                <StyledTableCell align="left">{row.orderPrice}</StyledTableCell>
                                <StyledTableCell align="left">{row.orderDate}</StyledTableCell>
                                <StyledTableCell align="left">{row.orderStatus}</StyledTableCell>
                                <StyledTableCell align="center"><br></br><b>VT3354543423 </b>
                                <br></br>
                                    
                                    <Button id="btnTrack" onClick={()=>{console.log(row.itemName)}}>Tracking</Button>
                                
                                <br></br>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

             </div>
            </Col>
            </Row>     
           
                  

                                  

        </div>
        



    </div> );
}
 
export default ShoppingCart;