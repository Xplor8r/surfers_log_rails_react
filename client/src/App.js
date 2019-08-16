import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { fetchLogEntryData } from './Actions/logEntries';
import { fetchCountryData } from './Actions/countries';
import { fetchSurfSpotData } from './Actions/surfSpots';

import './App.css';
import 'moment-timezone';
import { Container, Row, Media, Spinner } from 'reactstrap';
import header from './images/surfers-log-header.gif'

import AllLogEntries from './Containers/allLogEntries';
import LogEntriesByCountry from './Containers/logEntriesByCountry';
import LogEntriesByUser from './Containers/logEntriesByUser';
import LogEntriesBySurfSpot from './Containers/logEntriesBySurfSpot';
import ShowLogEntry from './Containers/showLogEntry';
import NavBarComponent from './Components/navbar';
import SideBar from './Components/sidebar';


class App extends Component {
  componentWillMount(){
    this.props.fetchLogEntryData();
    this.props.fetchCountryData();
    this.props.fetchSurfSpotData();
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let dataFetch = this.props.dataFetch;
    let countries = this.props.countryData;
    let surfSpots = this.props.surfSpotData;

    return (
      <Router>
        <div className="App">
          <Media src={header} width={'100%'} alt="Surfers Log" />
          <NavBarComponent countries={countries} surfSpots={surfSpots}/>
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
              <SideBar countries={countries} surfSpots={surfSpots}/>
              <Switch>
                <Route exact path="/" component={AllLogEntries}/>
                <Route exact path="/country/:slug" component={LogEntriesByCountry}/>
                <Route exact path="/surf-spot/:slug" component={LogEntriesBySurfSpot}/>
                <Route exact path="/user/:slug" component={LogEntriesByUser} />
                <Route exact path="/log-entry/:id" component={ShowLogEntry}/>
              </Switch>
            </Row>}
          </Container>
          </header>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataFetch: state.dataFetch,
    logEntryData: state.logEntryData,
    countryData: state.countryData,
    surfSpotData: state.surfSpotData

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogEntryData: () => dispatch(fetchLogEntryData()),
    fetchCountryData: () => dispatch(fetchCountryData()),
    fetchSurfSpotData: () => dispatch(fetchSurfSpotData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);