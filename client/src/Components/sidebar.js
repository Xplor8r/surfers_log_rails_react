import React from 'react';
import { Card, CardTitle, CardText, Col, ListGroup, ListGroupItem }  from 'reactstrap';
import Country from './country';

const SideBar = ({countries, surfSpots}) => {
    let topList = countries.filter(a=>a.log_entries.length > 0);
    let alphaList = countries.sort((a,b)=> a.name.localeCompare(b.name)).filter(a=>a.log_entries.length === 0);

    return (
        <Col xs="3" style={{ padding: '0px'}}>
            <Card style={{ margin: '2rem .5rem 1rem .5rem'}}>
                <CardTitle><h2>Surf Spots</h2></CardTitle>
                <CardText>
                    <ListGroup>
                        {surfSpots.map((surfSpot) => (
                            <ListGroupItem 
                                key={surfSpot.id}
                                className="justify-content-center"
                            >
                                {surfSpot.name}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardText>
            </Card>
            <Card style={{ margin: '2rem .5rem 1rem .5rem'}}>
                <CardTitle><h2>Countries</h2></CardTitle>
                <CardText>
                    <ListGroup>
                        {topList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >
                                <Country country={country}/>
                            </ListGroupItem>
                        ))}
                        {alphaList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                className="justify-content-center"
                            >     
                                <Country country={country}/>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardText>
            </Card>
        </Col>
    )
}

export default SideBar