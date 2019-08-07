import React from 'react';
import Moment from 'react-moment'
import Truncate from 'react-truncate';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const LogEntry = ({logEntry}) => {
    return (
      <Card 
        style={{backgroundColor: 'grey', margin: '.5rem'}}
        key={logEntry.id}
      >
        <CardBody>
        <CardTitle>
          <h1>{logEntry.surf_spot.name} {logEntry.country.name}</h1>
        </CardTitle>
        <CardSubtitle>
          <h2>By {logEntry.user.name}</h2>
        </CardSubtitle>
        <CardText>
          {logEntry.date && logEntry.time ?
            <p>
              <Moment
                parse="YYYYMMDD HH:mm"
                format="MM/DD/YYYY HH:mm a"
              >
              {logEntry.date} {logEntry.time}
              </Moment>
            </p>:
            <p>
              <Moment
                parse="YYYYMMDD"
                format="MM/DD/YYYY"
              >
              {logEntry.date}
              </Moment>
            </p>
          }
        </CardText>
        <CardText>
          {logEntry.rating ?
            <StarRatingComponent
              name={'rating'}
              starCount={5}
              value={logEntry.rating}
            />:
            <p>No Rating</p>
          }
        </CardText>
        <CardText>
          { logEntry.swell_1_size &&
            logEntry.swell_1_direction &&
            <p>Swell: {logEntry.swell_1_size} ft {logEntry.swell_1_direction}</p>
          }
        </CardText>
        <CardText>
          {logEntry.wave_count && <p>Wave Count: {logEntry.wave_count}</p>}
        </CardText>
        <CardText>
          {logEntry.wind_direction &&
            <p>Wind: {logEntry.wind_direction} @ {logEntry.wind_speed} mph </p>
          }
        </CardText>
        <CardText>
          <p>
            <Truncate lines={2} width={600}>
              {logEntry.posts[0].content}
            </Truncate>
          </p>
        </CardText>
        <CardText>
        {logEntry.posts.length > 1 && <p>Comments: {logEntry.posts.length - 1}</p>}
        </CardText>
        {logEntry.image_url && <CardImg bottom width='50%' src={logEntry.image_url} alt={"Surfing at " + logEntry.surf_spot.name}/>}
        </CardBody>
      </Card>
    )
}

export default LogEntry