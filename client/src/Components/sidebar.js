import React from 'react';
import { Card, CardTitle, Col, ListGroup, ListGroupItem, Badge }  from 'reactstrap';

const SideBar = ({countries}) => {
    let topList = countries.filter(a=>a.log_entries.length > 0);
    let alphaList = countries.sort((a,b)=> a.name.localeCompare(b.name));

    return (
        <Col xs="3">
            <Card style={{backgroundColor: 'grey', margin: '.5rem'}}>
                <CardTitle>
                    <h1>Countries</h1>
                    <ListGroup>
                        {topList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                style={{backgroundColor: 'grey'}}
                                className="justify-content-between"
                            >
                            {country.name} <Badge pill>{country.log_entries.length}</Badge>
                            </ListGroupItem>
                        ))}
                        {alphaList.map((country) => (
                            <ListGroupItem 
                                key={country.id}
                                style={{backgroundColor: 'grey'}}
                                className="justify-content-between"
                            >
                                {country.name}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </CardTitle>
            </Card>
        </Col>
    )
}

export default SideBar