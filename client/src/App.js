import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const LogEntry = ({logEntry}) => {
  return (
    <li>
      <h1>{logEntry.surf_spot.name}</h1>
      <h2>{logEntry.country.name}</h2>
      <h3>By {logEntry.user.name}</h3>
      <p>{logEntry.posts[0].content}</p>
      <p>Comments: {logEntry.posts.length - 1}</p>
      <p>Rating: {logEntry.rating}</p>
      <p>Date: {logEntry.time} {logEntry.date}</p>
      <img src={logEntry.image_url}/>
      <p>Swell: {logEntry.swell_1_direction} {logEntry.swell_1_size}</p>
      <p>Wave Count: {logEntry.wave_count}</p>
      <p>Wind: {logEntry.wind_direction} {logEntry.wind_speed}</p>
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
        <ul>
          {logEntries.map((logEntry) => (
            <LogEntry key={logEntry.id} logEntry={logEntry} />
          ))}
        </ul>
        </header>
      </div>
    );
  }
}

export default App;
