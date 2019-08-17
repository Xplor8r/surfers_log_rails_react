import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogEntryDataBySurfSpot } from '../Actions/logEntries';
import { beginDataFetch } from '../Actions/dataFetch';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

class SurfSpotLink extends Component {
    constructor(props) {
        super(props);
        this.handleSurfSpotLinkClick = this.handleSurfSpotLinkClick.bind(this);
        this.state = {
        };
      }
    handleSurfSpotLinkClick = (id) => {
        this.props.beginDataFetch();
        this.props.fetchLogEntryDataBySurfSpot(id);
    }
    render() {
        let surfSpot = this.props.surfSpot
        return (
            <DropdownItem className="justify-content-center">
                <Link
                    to={`/surf-spot/${surfSpot.slug}`}
                    onClick={() => this.handleSurfSpotLinkClick(surfSpot.id)}
                >
                    <Truncate lines={1} width={150}>
                        {surfSpot.name}
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

export default connect(mapStateToProps, {fetchLogEntryDataBySurfSpot, beginDataFetch})(SurfSpotLink);
