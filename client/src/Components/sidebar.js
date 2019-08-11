import React from 'react';
import Truncate from 'react-truncate';
import { Card, CardTitle, Col, ListGroup, ListGroupItem, Badge, Nav,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem }  from 'reactstrap';

const SideBar = ({countries}) => {
    let topList = countries.filter(a=>a.log_entries.length > 0);
    let alphaList = countries.sort((a,b)=> a.name.localeCompare(b.name));

    return (
        <Col xs="3">
            <Card style={{ margin: '.5rem'}}>
                <CardTitle>
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
                                            <Badge pill>{country.log_entries.length}</Badge>
                                            <Truncate lines={1} width={150}> {country.name}</Truncate>                                  
                                        </DropdownToggle>
                                        <DropdownMenu left="true">
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
                                        <Truncate lines={1} width={150}>
                                            {country.name}
                                        </Truncate>
                                        </DropdownToggle>
                                        <DropdownMenu left="true" style={{padding: '.5rem'}}>
                                            <DropdownItem>
                                                No Log Entries<br/>
                                                Create a log Entry
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>

                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardTitle>
            </Card>
        </Col>
    )
}

export default SideBar