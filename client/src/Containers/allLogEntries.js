import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';
import { fetchLogEntryData } from '../Actions/logEntries';

class AllLogEntries extends Component {
    componentWillMount(){
        this.props.fetchLogEntryData();
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
  
export default connect(mapStateToProps, { fetchLogEntryData })(AllLogEntries)