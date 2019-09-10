import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Card, CardHeader } from 'reactstrap';
import LogEntry from '../Components/logEntry';
import { fetchLogEntryData } from '../Actions/logEntries';
import { fetchLogEntryDataByCountry } from '../Actions/logEntries';
import { fetchLogEntryDataBySurfSpot } from '../Actions/logEntries';
import { fetchLogEntryDataByUser } from '../Actions/logEntries';
import { clearLogEntryData } from '../Actions/logEntries';
import Ad from '../Components/ad';

class LogEntries extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isMobile: false,
            type: 'all'
        }
    }

    componentWillMount(){
        window.innerWidth < 415 && this.setState({isMobile: true});
        const fetch = (type, id) => {
            switch (type) {
                case ('country'):      
                    this.props.fetchLogEntryDataByCountry(id);
                    break;
                case ('surf-spot'):
                    this.props.fetchLogEntryDataBySurfSpot(id);
                    break;
                case ('surfer'):
                    this.props.fetchLogEntryDataByUser(id);
                    break;
                default:
                    this.props.fetchLogEntryData();
                    break;
            }
        }

        this.unlisten = this.props.history.listen((location) => {
            this.props.clearLogEntryData();
            const stateType = location.state.type
            this.setState({type: stateType});
            let newId = 0;
            if(stateType !== 'all') { newId = location.state.prop.id }
            fetch(stateType, newId)
            window.scrollTo(0, 0);
        });

        const propType = this.props.type;
        this.setState({type: propType});
        let propId = 0;
        if (propType !== 'all'){ propId = this.props.location.state.prop.id }
        fetch(propType, propId);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({isMobile: window.innerWidth < 415});
        });
        window.scrollTo(0, 0)
    }

    render() {
        const {isMobile} = this.state;
        const logEntries = this.props.logEntryData;
        const {type} = this.state;
        let header = 'Surf. Log. Share.';
        if (logEntries.length > 0) {
            if (type === 'surfer'){
                header = logEntries[0].user.name;
            } else if (type === 'country') {
                header = logEntries[0].country.name;
            } else if (type === 'surf-spot') {
                header = logEntries[0].surf_spot.name;
            }
        }

        return (
            <Col xs={isMobile ? "12": "6"} style={{ padding: '0px'}}>
                <Card>
                    <CardHeader>
                        <span>{header}</span>
                    </CardHeader>
                </Card>
                {logEntries.map((logEntry) => (
                    <LogEntry key={logEntry.id} logEntry={logEntry} />
                ))}
                {isMobile && <Ad />}
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logEntryData: state.logEntryData
    }
}

const actions = () => {
    return {
        fetchLogEntryData,
        fetchLogEntryDataByUser,
        fetchLogEntryDataByCountry,
        fetchLogEntryDataBySurfSpot,
        clearLogEntryData
    }
}
  
export default connect(mapStateToProps, actions())(LogEntries)