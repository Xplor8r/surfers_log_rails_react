import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogEntryDataByUser } from '../Actions/logEntries';
import { beginDataFetch } from '../Actions/dataFetch';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

class SurferLink extends Component {
    constructor(props) {
        super(props);
        this.handleSurferLinkClick = this.handleSurferLinkClick.bind(this);
        this.state = {
        };
    }

    handleSurferLinkClick = (id) => {
        this.props.beginDataFetch();
        this.props.fetchLogEntryDataByUser(id);
        window.scrollTo(0, 0);
    }
    
    render() {
        let surfer = this.props.surfer
        return (
            <DropdownItem className="justify-content-center">
                <Link
                    className="coral"
                    to={`/surfer/${surfer.slug}`}
                    onClick={() => this.handleSurferLinkClick(surfer.id)}
                >
                    <Truncate lines={1} width={150}>
                        {surfer.name}
                    </Truncate>
                </Link>
            </DropdownItem>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logEntryData: state.logEntryData,
        dataFetch: state.dataFetch,
    }
  }

export default connect(mapStateToProps, {fetchLogEntryDataByUser, beginDataFetch})(SurferLink);
