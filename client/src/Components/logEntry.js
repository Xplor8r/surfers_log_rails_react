import React from 'react';
import Moment from 'react-moment'
import Truncate from 'react-truncate';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader } from 'reactstrap';
import Comments from './comments'


const LogEntry = ({logEntry}) => {
    let comments = logEntry.posts
    return (
      <Card style={{ textAlign: 'left', margin: '2rem .5rem 1rem .5rem'}} key={logEntry.id}>
        <CardHeader>
          <strong>{logEntry.user.name}</strong><br/>
          {logEntry.surf_spot.name} {logEntry.country.name}
        </CardHeader>
        <CardBody>
          <CardTitle>
            {logEntry.date && logEntry.time ?
                <Moment
                  parse="YYYYMMDD h:mm"
                  format="MM/DD/YYYY h:mm a"
                >
                {logEntry.date} {logEntry.time}
                </Moment>:
                <Moment
                  parse="YYYYMMDD"
                  format="MM/DD/YYYY"
                >
                {logEntry.date}
                </Moment>
            }
            <br/>
            {logEntry.rating &&
              <StarRatingComponent
                name={'rating'}
                starCount={5}
                value={logEntry.rating}
            />}
          </CardTitle>
            <CardText>
              Swell: {logEntry.swell_1_size} ft {logEntry.swell_1_direction}
            </CardText>
            {logEntry.wave_count && <CardText>
              Wave Count: {logEntry.wave_count}
            </CardText>}
            {logEntry.wind_direction && <CardText>
              Wind: {logEntry.wind_direction} @ {logEntry.wind_speed} mph
            </CardText>}
            <CardText>
              <Truncate lines={2}>
                {logEntry.posts[0].content}
              </Truncate>
            </CardText>   
          {logEntry.image_url && <CardImg
            bottom
            width='50%'
            src={logEntry.image_url}
            alt={"Surfing at " + logEntry.surf_spot.name}
          />}
        </CardBody>
        <Comments comments={comments}/>
      </Card>
    )
}

export default LogEntry