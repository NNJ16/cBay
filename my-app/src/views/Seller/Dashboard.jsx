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
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import API from "../../components/api";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "grey",
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

const removeCache= () =>{
    itemList.splice(0, itemList.length);
}

export default function CustomizedTables() {
    const history = useHistory();
    const classes = useStyles();
    const [rows,setRows] = useState([]);
    const userId = localStorage.getItem("userId");
    const submit = (itemID) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Item.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        deleteItem(itemID);
                        window. location. reload();
                    }
                },
                {
                    label: 'No',
                    onClick: () => window. location. reload()
                }
            ]
        });
    };
    API.post("/items",{userId: userId}).then(res=>{
        let arr = res.data;
        let i;
        for (i = 0; i < arr.length; i++) {
            itemList.push(arr[i])
        }
        setRows(itemList);
    });

    const deleteItem=(itemID)=>{
        API.delete("/deleteItem",({data:{itemID: itemID}})).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Header/>
            <div className="itemTable">
                <div className="item-table-header">
                    <Row>
                        <Col className="dashboard-header">
                            <h3>Manage active listings ({rows.length})</h3>
                        </Col>
                        <Col className="add-new-listening">
                            <Button onClick={() => {
                                removeCache();
                                history.push("/additem")
                            }}>Add new Listening</Button>
                        </Col>
                    </Row>
                </div>
                <br/>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Item Name</StyledTableCell>
                                <StyledTableCell align="left">Item Description</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
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
                                    <StyledTableCell align="left"><Button onClick={() => {
                                        removeCache();
                                        history.push({pathname: "/updateitem", state: {data: row}});
                                    }}>Edit</Button></StyledTableCell>
                                    <StyledTableCell align="left"><Button onClick={() => {
                                        submit(row.itemID);
                                        removeCache();
                                    }}>Delete</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer/>
        </div>
    );
}
