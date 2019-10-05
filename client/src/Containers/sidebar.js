import React from 'react';
import { Nav, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem }  from 'reactstrap';
import SideBarItem from '../Components/sideBarItem';
import Ad from '../Components/ad';

// pass type to SideBarItem for different rendering
const SideBarCard = ({list, type}) => {
    return (
        <Card>
            <CardBody style={{padding: '0px'}}>
                <CardHeader style={{paddingTop: '.5rem'}}>
                    {type === 'surf-spot' ?<span>Surf Spots</span>:
                        <span>Countries</span>
                    }
                </CardHeader>
                <ListGroup>
                    {list.map((prop) => (
                        <ListGroupItem 
                            key={prop.id}
                            className="justify-content-center"
                        >
                            <Nav>
                                <SideBarItem prop={prop} type={type}/>
                            </Nav>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </CardBody>
        </Card>
    )
}

const SideBar = ({countries, surfSpots}) => {
    // create lists of countries and surfSpots that have log_entries
    let countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
    let surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <SideBarCard list={surfSpotsWithLogEntries} type={'surf-spot'} />
            <SideBarCard list={countriesWithLogEntries} type={'country'} />

            <Ad />
        </Col>
    )
}

export default SideBar
