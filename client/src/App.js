import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment'
import 'moment-timezone';
import Truncate from 'react-truncate';
import StarRatingComponent from 'react-star-rating-component';

const LogEntry = ({logEntry}) => {
  return (
    <div>
      <h1>{logEntry.surf_spot.name} {logEntry.country.name}</h1>
      <h2>By {logEntry.user.name}</h2>
      {logEntry.date && logEntry.time ?
        <p><Moment parse="YYYYMMDD HH:mm" format="MM/DD/YYYY HH:mm a">{logEntry.date} {logEntry.time}</Moment></p>:
        <p><Moment parse="YYYYMMDD" format="MM/DD/YYYY">{logEntry.date}</Moment></p>
      }
      {logEntry.rating  && <StarRatingComponent starCount={5} value={logEntry.rating}/>}
      { logEntry.swell_1_size && logEntry.swell_1_direction && <p>Swell: {logEntry.swell_1_size} ft {logEntry.swell_1_direction}</p>}
      {logEntry.wave_count && <p>Wave Count: {logEntry.wave_count}</p>}
      {logEntry.wind_direction && <p>Wind: {logEntry.wind_direction} @ {logEntry.wind_speed} mph </p>}
      <p><Truncate lines={2} width={600}>{logEntry.posts[0].content}</Truncate></p>
      <p>Comments: {logEntry.posts.length - 1}</p>
      {logEntry.image_url && <img width={600} src={logEntry.image_url} alt={"Surfing at " + logEntry.surf_spot.name}/>}
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        logEntries: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    return (
      fetch('/RailsApi/log_entries', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        this.setState({ logEntries: data })
      })
    )
  }
  componentWillMount(){
    this.fetchData();
  }
  render() {
    let logEntries = this.state.logEntries
    return (
      <div className="App">
        <header className="App-header">
        <div>
          {logEntries.length === 0 ?
          <img src={logo} className="App-logo" alt="logo" /> :
          <div>
            {logEntries.map((logEntry) => (
              <LogEntry key={logEntry.id} logEntry={logEntry} />
            ))}
          </div>}
        </div>
        </header>
      </div>
    );
  }
}

export default App;
