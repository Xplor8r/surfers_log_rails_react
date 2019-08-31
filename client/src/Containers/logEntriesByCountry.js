import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import LogEntry from '../Components/logEntry';
import { fetchLogEntryDataByCountry } from '../Actions/logEntries';

class LogEntriesByCountry extends Component {
    componentWillMount(){
        this.unlisten = this.props.history.listen((location) => {
           if (location.state.type === 'country'){
                let id = location.state.prop.id
                this.props.fetchLogEntryDataByCountry(id);
                window.scrollTo(0, 0);
            }
        });
        let id = this.props.location.state.prop.id
        this.props.fetchLogEntryDataByCountry(id);
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
  
export default connect(mapStateToProps, { fetchLogEntryDataByCountry })(LogEntriesByCountry);