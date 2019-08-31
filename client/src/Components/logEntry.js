import React, { useState } from 'react';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardText, CardBody,
  CardTitle, CardHeader } from 'reactstrap';
import Comments from './comments'
import ModalImage from './modalImage'
import  { Link } from 'react-router-dom';

const LogEntry = ({logEntry}) => {
  const [lines] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const toggleLines = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  }
  return (
    <Card style={{ textAlign: 'left'}} key={logEntry.id}>
      <CardHeader>
        <CardTitle style={{float: 'right'}}>
          {logEntry.date && logEntry.time ?
            <Moment parse="YYYYMMDD h:mm" format="MM/DD/YYYY h:mm a">
              {logEntry.date} {logEntry.time}
            </Moment>:
            <Moment parse="YYYYMMDD" format="MM/DD/YYYY">
              {logEntry.date}
            </Moment>
          }<br/>

          {logEntry.rating && 
            <StarRatingComponent 
              name={'rating'} 
              starCount={5}
              value={logEntry.rating}
            />
          }
        </CardTitle>
        <Link
          className="coral"
          to={{
            pathname: `/surfer/${logEntry.user.slug}`,
            state: {
              prop: logEntry.user,
              type: 'surfer'
            }
          }}
        >
          {logEntry.user.name}
        </Link>
        <br/>
        {logEntry.surf_spot.name} {logEntry.country.name}
      </CardHeader>
      <CardBody>
            {logEntry.swell_1_size &&
              <CardText>
                Swell: {logEntry.swell_1_size} ft {logEntry.swell_1_direction}
              </CardText>
            }
            {logEntry.wave_count &&
              <CardText>
                Wave Count: {logEntry.wave_count}
              </CardText>
            }
            {logEntry.wind_direction &&
              <CardText>
                Wind: {logEntry.wind_direction} @ {logEntry.wind_speed} mph
              </CardText>
            }
                    <CardText>
          <Truncate 
            lines={!expanded && lines}
            ellipsis={(
              <span>... <Link 
                className="coral"
                to={`/log-entry/${logEntry.id}`}
                onClick={(e) => toggleLines(e)}
                >
                  See More
                </Link>
              </span>
            )}
          >
            {logEntry.posts[0].content}
          </Truncate>
        </CardText>   
        {logEntry.image_url &&
          <ModalImage logEntry={logEntry}/>
        }
      </CardBody>
      <Comments posts={logEntry.posts}/>
    </Card>
  )
}

export default LogEntry