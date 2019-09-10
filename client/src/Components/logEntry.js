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
  const [lines] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const toggleLines = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  }
  const {
    id, date, time, posts, rating, swell_1_size, swell_1_direction, swell_2_size,
    swell_2_direction, swell_3_size, swell_3_direction, wind_speed,
    wind_direction, wave_count, image_url, country, surf_spot, user
  } = logEntry;
  return (
    <Card style={{ textAlign: 'left'}} key={logEntry.id}>
      <CardHeader>
        <CardTitle style={{float: 'right'}}>
          {date && time ?
            <Moment parse="YYYYMMDD h:mm" format="MM/DD/YYYY h:mm a">
              {date} {time}
            </Moment>:
            <Moment parse="YYYYMMDD" format="MM/DD/YYYY">
              {date}
            </Moment>
          }<br/>

          {rating && 
            <StarRatingComponent 
              name={'rating'} 
              starCount={5}
              value={rating}
            />
          }
        </CardTitle>
        <Link className="coral"
          to={{
            pathname: `/surfer/${user.slug}`,
            state: { prop: user, type: 'surfer' }
          }}
        >
          {user.name}
        </Link>
        <br/>
        {surf_spot.name} {country.name}
      </CardHeader>
      <CardBody>
        <CardText>
          <Truncate 
            lines={!expanded && lines}
            ellipsis={(
              <span className="coral" style={{float: 'right'}}>
                ...<Link 
                  className="coral"
                  to={`/log-entry/${id}`}
                  onClick={(e) => toggleLines(e)}
                >
                  See More
                </Link>
              </span>
            )}
          >
            {posts[0].content}<br/>
            {(swell_1_size || swell_1_direction || wave_count ||
              wind_direction || wind_speed) && <span><br/><br/></span>}
            
            {swell_1_size && <span><b>Swell: </b>{swell_1_size} ft {swell_1_direction}</span>}
            {swell_2_size && <span><b> | </b>{swell_2_size} ft {swell_2_direction}</span>}
            {swell_3_size && <span><b> | </b>{swell_3_size} ft {swell_3_direction}</span>}

            {wave_count && <span><b> Wave Count: </b>{wave_count}</span>}
            {wind_direction && <span><b> Wind: </b>{wind_direction} @ {wind_speed} mph</span>}
          </Truncate><br/>
        </CardText>   
        {image_url &&
          <ModalImage logEntry={logEntry}/>
        }
      </CardBody>
      <Comments posts={posts}/>
    </Card>
  )
}

export default LogEntry