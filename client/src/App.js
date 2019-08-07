import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLogEntryData} from './Actions/logEntries'
import logo from './logo.svg';
import './App.css';
import LogEntry from './Components/logEntry'
import 'moment-timezone';


class App extends Component {
  componentWillMount(){
    this.props.fetchLogEntryData();
  }
  render() {
    let dataFetch = this.props.dataFetch
    let logEntries = this.props.logEntryData
    return (
      <div className="App">
        <header className="App-header">
        <div>
          {dataFetch ?
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

const mapStateToProps = (state) => {
  return {
    dataFetch: state.dataFetch,
    logEntryData: state.logEntryData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogEntryData: () => dispatch(fetchLogEntryData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);