import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import {useHistory} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
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

function handleChange(event) {
    const {name, value} = event.target;
    event.preventDefault();
}

const Header = (props) => {
    const history = useHistory();
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const goToCart = () => {
        if(props.cartItems){
            localStorage.setItem("cart",props.cartItems);
            console.log(props.cartItems);
        }
    }
    const menuClick = ()=>{
        console.log("Working....");
    }
    const signOut = ()=>{
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        history.push("/login");
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
                                    <Button className="btnS" color="primary"><SearchIcon/></Button>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div className="drop">
                                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret>
                                            My cBay
                                        </DropdownToggle>
                                        {userType === "user" ? <DropdownMenu>
                                            <DropdownItem onClick={menuClick}>My Orders</DropdownItem>
                                            <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                                        </DropdownMenu> :  <DropdownMenu>
                                            <DropdownItem>Dashboard</DropdownItem>
                                            <DropdownItem>View Orders</DropdownItem>
                                            <DropdownItem>View Home</DropdownItem>
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