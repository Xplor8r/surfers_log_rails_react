import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment'
import 'moment-timezone';

const LogEntry = ({logEntry}) => {
  return (
    <li>
      <h1>{logEntry.surf_spot.name}, {logEntry.country.name}</h1>
      <h2>By {logEntry.user.name}</h2>
      {logEntry.date && <p><Moment parse="YYYYMMDD HH:mm">{logEntry.date} {logEntry.time}</Moment></p>}
      <p>{logEntry.posts[0].content}</p>
      <p>Comments: {logEntry.posts.length - 1}</p>
      {logEntry.rating  && <p>Rating: {logEntry.rating}</p>}
      <img src={logEntry.image_url}/>
      { logEntry.swell_1_size && logEntry.swell_1_direction && <p>Swell: {logEntry.swell_1_size} ft @ {logEntry.swell_1_direction} sec</p>}
      {logEntry.wave_count && <p>Wave Count: {logEntry.wave_count}</p>}
      {logEntry.wind_direction && <p>Wind: {logEntry.wind_direction} @ {logEntry.wind_speed} mph </p>}
    </li>
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
    console.log(logEntries)
    return (
      <div className="App">
        <header className="App-header">
        <div>
          {logEntries.length === 0 ?
          <img src={logo} className="App-logo" alt="logo" /> :
          <ul>
            {logEntries.map((logEntry) => (
              <LogEntry key={logEntry.id} logEntry={logEntry} />
            ))}
          </ul>}
        </div>
        </header>
      </div>
    );
  }
}

export default App;
