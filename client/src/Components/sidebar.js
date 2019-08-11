import React from 'react';
import Truncate from 'react-truncate';
import { Card, CardText, Col, ListGroup, ListGroupItem, Badge, Nav,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem }  from 'reactstrap';

const SideBar = ({countries}) => {
    let topList = countries.filter(a=>a.log_entries.length > 0);
    let alphaList = countries.sort((a,b)=> a.name.localeCompare(b.name));

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <Card style={{ margin: '.5rem'}}>
                <CardText>
                    <h1>Countries</h1>
                    <ListGroup>
                        {topList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >
                                <Nav>
                                <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle className="coral" nav caret>
                                            {country.name} <Badge pill>{country.log_entries.length} Log Entries</Badge>                          
                                        </DropdownToggle>
                                        <DropdownMenu left="true">
                                            <DropdownItem header>Surf Spots</DropdownItem>
                                            <DropdownItem divider />
                                            {country.surf_spots.map((spot)=> (
                                                <DropdownItem key={spot.id}>
                                                    <Truncate lines={1} width={150}>
                                                        {spot.name}
                                                    </Truncate>
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
        
                            </ListGroupItem>
                        ))}
                        {alphaList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >     
                                <Nav>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle className="coral" nav caret>
                                            {country.name}
                                        </DropdownToggle>
                                        <DropdownMenu left="true">
                                            <DropdownItem header>No Log Entries</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Create a log Entry
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>

                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardText>
            </Card>
        </Col>
    )
}

export default SideBar