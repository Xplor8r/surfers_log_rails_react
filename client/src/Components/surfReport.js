import React from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Moment from 'react-moment';
import Pic from "../images/noaa.jpg";

const SurfReport = () => {
  return (
    <Col xs="3" style={{ padding: '0px'}}>
      <Card style={{position: 'sticky', top: '120px'}}>
        <CardImg top width="100%" src={Pic} alt="Noaa swell image" />
        <CardBody style={{textAlign: 'left'}}>
          <CardTitle className="coral"><strong>Get Local Surf Report</strong></CardTitle>
          <CardSubtitle><Moment local format="MM/DD/YYYY"></Moment></CardSubtitle>
          <CardText>local Surf Report goes here</CardText>
        </CardBody>
        <CardFooter>
          <Button 
            outline color="secondary"
            href="https://magicseaweed.com/California-South-Surf-Forecast/17/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get Report
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default SurfReport;
