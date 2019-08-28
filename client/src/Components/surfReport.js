import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Moment from 'react-moment';
import Pic from "../images/noaa.jpg";

const SurfReport = () => {
  return (
    <Col xs="3" style={{ padding: '0px'}}>
      <Card style={{position: 'sticky', top: '120px'}}>
        <CardImg top width="100%" src={Pic} alt="Noaa swell image" />
        <CardBody style={{textAlign: 'left'}}>
          <CardTitle><strong>Get Local Surf Report</strong></CardTitle>
          <CardSubtitle><Moment local></Moment></CardSubtitle>
          <CardText>local Surf Report goes here</CardText>
          <Button>Get Report</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SurfReport;
