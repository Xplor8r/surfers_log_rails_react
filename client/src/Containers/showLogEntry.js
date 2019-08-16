import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';

class LogEntriesByUser extends Component {
    componentWillMount(){

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        let logEntry = this.props.logEntryData[0];
        return (
            <Col xs="9" style={{ padding: '0px'}}>
                <LogEntry key={logEntry.id} logEntry={logEntry} />
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logEntryData: state.logEntryData
    }
  }
  
export default connect(mapStateToProps)(LogEntriesByUser)