import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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
  constructor(props){
    super(props);
    this.state = {
      isMobile: false
    }
  }
  // set isMobile true if screen is less than 415 px fetch list of countries, surf spots, and surfers
  UNSAFE_componentWillMount(){
    window.innerWidth < 415 && this.setState({isMobile: true});
    this.props.fetchCountryData();
    this.props.fetchSurfSpotData();
    this.props.fetchSurferData();
  }
  // set isMobile true if screen resized to less than 415px auto scroll to top
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({isMobile: window.innerWidth < 415});
    });
    window.scrollTo(0, 0)
  }
  render() {
    const { dataFetch, countryData, surfSpotData, surferData } = this.props;
    const { isMobile } = this.state;

    return (
      <Router>
        <div className="App">
          <Media src={header} width={'100%'} alt="Surfers Log" />
          <NavBarComponent
            countries={countryData}
            surfSpots={surfSpotData}
            surfers={surferData}
            isMobile={isMobile}
          />
          <header className="App-header">
          <Container className="content">
            {dataFetch ? <Spinner type="grow" />:
              <Row >
                <SideBar countries={countryData} surfSpots={surfSpotData}/>
                <Switch> {/* use render to pass type and isMobile props */}
                  <Route exact path="/"
                    render={(props)=> {
                      return (
                        <LogEntries {...props} type={'all'} isMobile={isMobile}/>
                      )
                    }}
                  />
                  <Route exact path="/country/:slug"
                    render={(props)=> {
                      return(
                        <LogEntries {...props} type={'country'} isMobile={isMobile}/>
                      )
                    }}
                  />
                  <Route exact path="/surf-spot/:slug"
                    render={(props)=> {
                      return (
                        <LogEntries {...props} type={'surf-spot'} isMobile={isMobile}/>
                      )
                    }}
                  />
                  <Route exact path="/surfer/:slug"
                    render={(props)=> {
                      return(
                        <LogEntries {...props} type={'surfer'} isMobile={isMobile}/>
                      )
                    }}
                  />
                  <Route exact path="/log-entry/:id" component={ShowLogEntry} isMobile={isMobile}/>
                  <Route render={() => <Redirect to={{pathname: "/"}} />} />
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