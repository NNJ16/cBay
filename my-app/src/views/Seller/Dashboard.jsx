import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {Button, Col, Row} from "reactstrap";

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

function createData(itemId, itemName,imgURL, description, price) {
    return {itemId, itemName,imgURL, description, price};
}

const rows = [
    createData(10001,
        "Apple MacBook Air (M1, 2020)",
        "",
        "CPU: Apple M1Graphics: Integrated 7-core /8-core GPURAM: 8GB – 16GB"
        , 240000.00),
    createData(10002,
        "Microsoft Surface Laptop 4 ",
        "",
        "CPU: 11th-generation Intel Core i5 – i7 /AMD Ryzen 5 - 7Graphics: Intel Iris Xe / AMD RadeonRAM: 8GB – 32GB",
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

export default function CustomizedTables() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <div className="itemTable">
            <div className="item-table-header">
                <Row>
                    <Col className="dashboard-header">
                        <h3>Manage active listings ({rows.length})</h3>
                    </Col>
                    <Col className="add-new-listening">
                        <Button onClick={()=>{
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
                                <StyledTableCell align="left"><Button onClick={()=>{
                                    history.push({pathname:"/updateitem",state:{data:row}});
                                }}>Edit</Button></StyledTableCell>
                                <StyledTableCell align="left"><Button onClick={()=>{
                                    console.log(row.itemName)
                                }}>Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
