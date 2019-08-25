import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';

class LogEntriesBySurfSpot extends Component {

    render() {
        let logEntries = this.props.logEntryData;
        return (
            <Col xs="9" style={{ padding: '0px'}}>
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
  
export default connect(mapStateToProps)(LogEntriesBySurfSpot)