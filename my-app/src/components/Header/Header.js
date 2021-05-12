import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
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
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
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
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                    {userType ==="user" ? <IconButton aria-label="cart">
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