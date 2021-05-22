import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {Button, Col, Row} from "reactstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import API from "../components/api";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const orderList = [];
const orderList2 = [];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const removeCache= () =>{
    orderList.splice(0, orderList.length);
}

export default function CustomizedTables() {
    const history = useHistory();
    const classes = useStyles();
    const [rows,setRows] = useState([]);

    let arr2
    let arr3

   
    const viewDashboard = () =>{
        history.push("/dashboard");
    }

    
    // get Orders from database
    
    API.get("/getOrders").then(res=>{
        let arr = res.data;
        let y
        let i;
        let x;
        for (i = 0; i < arr.length; i++) {
            orderList.push(arr[i]) 
         
            arr2=(orderList[i].orderDesc)

            for (x = 0; x < arr2.length; x++) {
                arr3=(arr2[x]) 
                
           
            }
           
            for (x = 0; x < arr2.length; x++) {
                arr3=(arr2[x]) 
                
           
            }
                         console.log(y);
        }
        setRows(orderList);//set Row
       

       
    });




    return (
   

    <div>
<Header/>
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
                         <StyledTableCell align="center">Order Date</StyledTableCell>
                         <StyledTableCell align="center">Payment Type</StyledTableCell>
                         <StyledTableCell align="center"> Price</StyledTableCell>
                        <StyledTableCell align="center">Tracking</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.orderName}>
                            <StyledTableCell component="th" scope="row"></StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                            <StyledTableCell align="center">{row.description}</StyledTableCell>
                            <StyledTableCell align="center">{row.orderAddress}, <br></br>{row.city} <br></br>{row.province}<br></br><br></br> {row.zipCode}</StyledTableCell>
                            <StyledTableCell align="center">{row.orderDate}</StyledTableCell>
                            <StyledTableCell align="center">{row.paymentType}</StyledTableCell>
                            <StyledTableCell align="center">{row.orderPrice}</StyledTableCell>
                            <StyledTableCell align="center"><br></br><b> {row.deliveryStatus}</b>
                            <br></br>
                            <br></br>
                            VT3354543423
                            <br></br>
                            
                                <Button id="btnTrack" >Tracking</Button>
                            
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
    

<Footer/>

</div> );
}
