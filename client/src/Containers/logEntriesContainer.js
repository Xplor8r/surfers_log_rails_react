import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';
import { fetchLogEntryData } from '../Actions/logEntries';
import { fetchLogEntryDataByCountry } from '../Actions/logEntries';
import { fetchLogEntryDataBySurfSpot } from '../Actions/logEntries';
import { fetchLogEntryDataByUser } from '../Actions/logEntries';

class LogEntries extends Component {

    componentWillMount(){
        this.unlisten = this.props.history.listen((location) => { 
            let newId;
            switch (location.state.type) {
                case ('country'):
                    newId = location.state.prop.id;
                    this.props.fetchLogEntryDataByCountry(newId);
                    window.scrollTo(0, 0);
                    break;
                case ('surf-spot'):
                    newId = location.state.prop.id;
                    this.props.fetchLogEntryDataBySurfSpot(newId);
                    window.scrollTo(0, 0);
                    break;
                case ('surfer'):
                    newId = location.state.prop.id;
                    this.props.fetchLogEntryDataByUser(newId);
                    window.scrollTo(0, 0);
                    break;
                default:
                    this.props.fetchLogEntryData();
                    window.scrollTo(0, 0);
                    break;
            } 
        });
        let id;
        switch (this.props.type) {
            case ('country'):
                id = this.props.location.state.prop.id
                this.props.fetchLogEntryDataByCountry(id);
                break;
            case ('surf-spot'):
                id = this.props.location.state.prop.id
                this.props.fetchLogEntryDataBySurfSpot(id);
                break;
            case ('surfer'):
                id = this.props.location.state.prop.id
                this.props.fetchLogEntryDataByUser(id);
                break;
            default:
                this.props.fetchLogEntryData();
                break;
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let logEntries = this.props.logEntryData;
        return (
            <Col xs="6" style={{ padding: '0px'}}>
                {logEntries.map((logEntry) => (
                    <LogEntry key={logEntry.id} logEntry={logEntry} />
                ))}
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
        fetchLogEntryDataBySurfSpot
    }
}
  
export default connect(mapStateToProps, actions())(LogEntries)