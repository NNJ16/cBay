import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { Button, Col, Row } from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteIcon from '@material-ui/icons/Delete';

import { Form, FormGroup, Label, Input, Container } from "reactstrap";

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

const itemList = [];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const removeCache = () => {
    itemList.splice(0, itemList.length);
}

export default function CustomizedTables() {
    const history = useHistory();
    const classes = useStyles();
    const [rows, setRows] = useState([]);


    const cart1 = JSON.parse(localStorage.getItem("cart")); //get cart item back





    let Itemvalue = cart1.length;


    //calculate total price
    const sum = cart1.reduce(function (prev, current) {
        return prev + +(current.unitPrice * current.itemQty)
    }, 0);
    console.log(sum)


    let shipCost = 200;
    let cartHead = "Cart"

    if (Itemvalue == 0) {
        shipCost = 0;
        cartHead = "Cart is Empty"
    }

    let btnEnable = () => {
        if (Itemvalue == 0) {
            return true;
        } else {
            return false;
        }
    }

    const tot = shipCost + sum;


    console.log(btnEnable);





    const deleteAll = () => {

        confirmAlert({
            title: 'Confirm to Cancel',
            message: 'Are you sure to cancel Order.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        localStorage.removeItem("cart");
                        history.push("/");
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                    onClick: () => window.location.reload()
                }
            ]
        });
    };
    const viewDashboard = () => {
        history.push("/dashboard");
    }





    //delete cart items


    const deleteItem = (itemID) => {
        localStorage.removeItem("cart");
        history.push("/");
    }



    return (


        <div>
            <Header />
            <div className="shoppingCart">
                <h1 className="cart-title">Shopping Cart</h1>
                {/* cart details part */}
                <Container className="themed-container" >
                    <Row>
                        <Col className="item" lg="8" >
                            <h3>{cartHead} ({cart1.length})</h3>
                            <div className="itemListcart">
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Item Name</StyledTableCell>
                                                <StyledTableCell align="left">Item Description</StyledTableCell>
                                                <StyledTableCell align="left">Price</StyledTableCell>
                                                <StyledTableCell align="left">Quantity</StyledTableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {cart1.map((row) => (
                                                <StyledTableRow key={row.itemName}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.itemName}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{row.description}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.unitPrice}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.itemQty}</StyledTableCell>

                                                </StyledTableRow>


                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>
                        </Col>

                        {/* //order Summary  part    */}
                        <Col className="check" xs="3" >
                            <h4 className="order">Order Summary </h4>
                            <Row>

                                <Row> <div className="ordersum">

                                    <table>
                                        <tr >
                                            <td>SubTotal ({Itemvalue} Items)</td>
                                            <td className="order-d"> Rs : {sum}</td>

                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td className="order-d"> Rs : {shipCost}</td>

                                        </tr>

                                        <tr>
                                            <td id="order-t" >Total</td>
                                            <td id="order-t"> Rs : {tot}</td>

                                        </tr>

                                    </table>

                                </div>
                                </Row>
                                <Col>
                                    <h6 id="checkCancel" onClick={() => {
                                        deleteAll();
                                        removeCache();
                                    }}>Cancel Order</h6>
                                </Col>
                                <Col className="check-out">
                                    <Button disabled={btnEnable()} className="check-o" onClick={() => {
                                        localStorage.setItem("total", tot);
                                        history.push("/checkoutitem");

                                    }}>Check out</Button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>



                </Container>




            </div>

            <Footer />


        </div>);

}
