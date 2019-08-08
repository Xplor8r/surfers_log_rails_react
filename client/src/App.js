import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLogEntryData} from './Actions/logEntries';
import {fetchCountryData} from './Actions/countries';
import logo from './logo.svg';
import './App.css';
import LogEntry from './Components/logEntry';
import 'moment-timezone';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Components/navbar';
import SideBar from './Components/sidebar';

class App extends Component {
  componentWillMount(){
    this.props.fetchLogEntryData();
    this.props.fetchCountryData();
  }
  render() {
    let dataFetch = this.props.dataFetch
    let logEntries = this.props.logEntryData
    let countries = this.props.countryData
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <Container className="content">
          {dataFetch ?
          <img src={logo} className="App-logo" alt="logo" /> :
          <Row >
            <SideBar countries={countries}/>
            <Col xs="9">
              {logEntries.map((logEntry) => (
                <LogEntry key={logEntry.id} logEntry={logEntry} />
              ))}
            </Col>
          </Row>}
        </Container>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataFetch: state.dataFetch,
    logEntryData: state.logEntryData,
    countryData: state.countryData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogEntryData: () => dispatch(fetchLogEntryData()),
    fetchCountryData: () => dispatch(fetchCountryData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);