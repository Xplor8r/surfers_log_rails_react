import React from 'react';
import { Nav, Card, CardBody, CardImg, CardHeader, Media, Col, ListGroup, ListGroupItem }  from 'reactstrap';
import SideBarItem from '../Components/sideBarItem';
import header from '../images/surfers-log-header.gif'
import Pic from "../images/Trunks_05_1024x1024.jpg";

const SideBar = ({countries, surfSpots}) => {
    let countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
    let surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <Card>
                <CardBody style={{padding: '0px'}}>
                    <CardHeader style={{paddingTop: '.5rem'}}>
                        <h3><strong>Surf Spots</strong></h3>
                    </CardHeader>
                    <ListGroup>
                        {surfSpotsWithLogEntries.map((surfSpot) => (
                            <ListGroupItem 
                                key={surfSpot.id}
                                className="justify-content-center"
                            >
                                <Nav>
                                    <SideBarItem prop={surfSpot} type={'surf-spot'}/>
                                </Nav>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
            <Card>
                <CardBody style={{padding: '0px'}}>
                    <CardHeader style={{paddingTop: '.5rem'}}>
                        <h3><strong>Countries</strong></h3>
                    </CardHeader>
                    <ListGroup>
                        {countriesWithLogEntries.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >
                                <Nav>
                                    <SideBarItem prop={country} type={'country'}/>
                                </Nav>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
            <Card style={{position: 'sticky', top: '120px'}}>
                <CardImg
                    top
                    width='50%'
                    src={header}
                    alt={"Surfer Log"}
                />
                <CardHeader className="coral"><strong>Ad Goes Here</strong></CardHeader>
                <Media width="100%" src={Pic} alt="Trunks Ad" />

            </Card>
        </Col>
    )
}

export default SideBar
