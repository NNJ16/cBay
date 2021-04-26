import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
    Container,
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button
} from 'reactstrap';

function handleChange(event) {
    const {name, value} = event.target;
    console.log(value);
    event.preventDefault();
}

const Example = (props) => {
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
                            <Col xs="2" className="noPadding">
                                <div className="btnSearch">
                                    <Button className="btnS" color="primary"><SearchIcon/></Button>
                                </div>
                            </Col>
                            <Col xs="2">
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
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        </div>
    );
};

export default Example;