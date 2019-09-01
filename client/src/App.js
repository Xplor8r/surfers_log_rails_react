import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { fetchCountryData } from './Actions/countries';
import { fetchSurfSpotData } from './Actions/surfSpots';
import { fetchSurferData } from './Actions/surfers';

import './App.css';
import 'moment-timezone';
import { Container, Row, Media, Spinner } from 'reactstrap';
import header from './images/surfers-log-header.gif'

import LogEntries from './Containers/logEntriesContainer';
import ShowLogEntry from './Containers/showLogEntry';
import NavBarComponent from './Containers/navbar';
import SideBar from './Containers/sidebar';
import SurfReport from './Components/surfReport';

class App extends Component {
  componentWillMount(){
    this.props.fetchCountryData();
    this.props.fetchSurfSpotData();
    this.props.fetchSurferData();
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let dataFetch = this.props.dataFetch;
    let countries = this.props.countryData;
    let surfSpots = this.props.surfSpotData;
    let surfers = this.props.surferData;

    return (
      <Router>
        <div className="App">
          <Media src={header} width={'100%'} alt="Surfers Log" />
          <NavBarComponent
            countries={countries}
            surfSpots={surfSpots}
            surfers={surfers}
          />
          <header className="App-header">
          <Container className="content">
            {dataFetch ? <Spinner type="grow" />:
              <Row >
                <SideBar countries={countries} surfSpots={surfSpots}/>
                <Switch>
                  <Route exact path="/"
                    render={(props)=> {
                      return (
                        <LogEntries {...props} type={'all'}/>
                      )
                    }}
                  />
                  <Route exact path="/country/:slug"
                    render={(props)=> {
                      return(
                        <LogEntries {...props} type={'country'}/>
                      )
                    }}
                  />
                  <Route exact path="/surf-spot/:slug"
                    render={(props)=> {
                      return (
                        <LogEntries {...props} type={'surf-spot'}/>
                      )
                    }}
                  />
                  <Route exact path="/surfer/:slug"
                    render={(props)=> {
                      return(
                        <LogEntries {...props} type={'surfer'}/>
                      )
                    }}
                  />
                  <Route exact path="/log-entry/:id" component={ShowLogEntry}/>
                </Switch>
                <SurfReport/>
              </Row>
            }
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
    countryData: state.countryData,
    surfSpotData: state.surfSpotData,
    surferData: state.surferData

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountryData: () => dispatch(fetchCountryData()),
    fetchSurfSpotData: () => dispatch(fetchSurfSpotData()),
    fetchSurferData: () => dispatch(fetchSurferData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);