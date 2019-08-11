import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLogEntryData} from './Actions/logEntries';
import {fetchCountryData} from './Actions/countries';
import './App.css';
import LogEntry from './Components/logEntry';
import 'moment-timezone';
import { Container, Row, Col, Media, Spinner } from 'reactstrap';
import Navbar from './Components/navbar';
import SideBar from './Components/sidebar';
import header from './images/surfers-log-header.gif'

class App extends Component {
  componentWillMount(){
    this.props.fetchLogEntryData();
    this.props.fetchCountryData();
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let dataFetch = this.props.dataFetch
    let logEntries = this.props.logEntryData
    let countries = this.props.countryData
    return (
      <div className="App">
        <Media src={header} width={'100%'} alt="Surfers Log" />
        <Navbar />
        <header className="App-header">
        <Container className="content">
          {dataFetch ?
          <Spinner 
            style={{
              backgroundColor: "#7cbcc6",
              width: '30rem',
              height: '30rem' 
            }}
            type="grow"
          />:
          <Row >
            <SideBar countries={countries}/>
            <Col xs="9" style={{ padding: '0px'}}>
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