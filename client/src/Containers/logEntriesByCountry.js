import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';

class LogEntriesByCountry extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        console.log(this.props.dataFetch)
        let dataFetch = this.props.dataFetch;
        let logEntries = this.props.logEntryData;
        if (!dataFetch) {
            return (
                <Col xs="9" style={{ padding: '0px'}}>
                    {logEntries.map((logEntry) => (
                        <LogEntry key={logEntry.id} logEntry={logEntry} />
                    ))}
                </Col>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        logEntryData: state.logEntryData,
        dataFetch: state.dataFetch
    }
}
  
export default connect(mapStateToProps)(LogEntriesByCountry);