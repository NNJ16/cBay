import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import {useHistory} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import API from "../api";
import {
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button
} from 'reactstrap';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const userType = localStorage.getItem("userType");
let itemName = "";

function handleChange(event) {
    const {name, value} = event.target;
    itemName = value;
}

const Header = (props) => {
    const history = useHistory();
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    const goToCart = () => {
        if(props.cartItems){
            
           localStorage.setItem("cart", JSON.stringify(props.cartItems)); //store cart
            history.push("/itemCart");
        }
    }
    const myOrders = ()=>{
        console.log("Working....");
    }
    const vieDashboard = ()=>{
        history.push("/dashboard");
        window.location.reload();
    }
    const viewHome = ()=>{
        history.push("/");
        window.location.reload();
    }
    const searchItems= () => {
        if(itemName){
            if(props.findItems){
                props.findItems(itemName);
            }
        }
    }
    const signOut = ()=>{
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        history.push("/login");
        window.location.reload();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const sendmail=()=>{
        API.post("/mail",{tomail:"nethsera@gmail.com"}).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!");

            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
            }
        })
    }
    return (
        <div>
            <header>
                <Row>
                    <Col xs="2">
                        <div className="brand">
                            <h1>cBay</h1>
                        </div>
                    </Col>
                    <Col xs="10">
                        <Row>
                            <Col xs="8" className="noPadding">
                                <div className="searchbox">
                                    <Input className="searchText" type="text" onChange={handleChange} name="search"
                                           placeholder="Search for Anything..."/>
                                </div>
                            </Col>
                            <Col xs="1" className="noPadding">
                                <div className="btnSearch">
                                    <Button className="btnS" color="primary" onClick={searchItems}><SearchIcon/></Button>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div className="drop">
                                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret>
                                            My cBay
                                        </DropdownToggle>
                                        {userType === "user" ? <DropdownMenu>
                                            <DropdownItem onClick={sendmail}>My Orders</DropdownItem>
                                            <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                                        </DropdownMenu> :  <DropdownMenu>
                                            <DropdownItem onClick={vieDashboard}>Dashboard</DropdownItem>
                                            <DropdownItem onClick={viewHome}>View Home</DropdownItem>
                                            <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                                        </DropdownMenu>}
                                    </ButtonDropdown>
                                    {userType ==="user" ? <IconButton onClick={goToCart} aria-label="cart">
                                        <StyledBadge badgeContent={props.count} color="secondary">
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton> : null}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        </div>
    );
};

export default Header;