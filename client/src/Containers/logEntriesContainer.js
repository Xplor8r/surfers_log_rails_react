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
    state ={ type: 'all' }
    // use type prop to fetch specified log entry data
    componentWillMount(){
        this.props.clearLogEntryData();
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
        // when url updates change type, set id and than call fetch
        this.unlisten = this.props.history.listen((location) => {
            let newId = 0;            
            const stateType = location.state.type
            this.setState({type: stateType});
            if(stateType !== 'all') { newId = location.state.prop.id }
            fetch(stateType, newId);
            window.scrollTo(0, 0);
        });
        // on page refresh or intial site load change type, set id and than call fetch
        let propId = 0;
        const propType = this.props.type;
        this.setState({type: propType});
        if (propType !== 'all'){ propId = this.props.location.state.prop.id }
        fetch(propType, propId);
        window.scrollTo(0, 0);
    }

    render() {
        const {isMobile, logEntryData} = this.props;
        const {type} = this.state;
        let header = 'Surf. Log. Share.';
        if (logEntryData.length > 0) {
            if (type === 'surfer'){
                header = logEntryData[0].user.name;
            } else if (type === 'country') {
                header = logEntryData[0].country.name;
            } else if (type === 'surf-spot') {
                header = logEntryData[0].surf_spot.name;
            }
        } else {
            header = 'No Log Entries'
        }

        return (
            <Col xs={isMobile ? "12": "6"} style={{ padding: '0px'}}>
                <Card>
                    <CardHeader>
                        <span>{header}</span>
                    </CardHeader>
                </Card>
                {logEntryData.map((logEntry) => (
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