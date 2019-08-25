import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogEntryDataByCountry } from '../Actions/logEntries';
import { beginDataFetch } from '../Actions/dataFetch';
import { DropdownItem } from 'reactstrap';
import Truncate from 'react-truncate';

class CountryLink extends Component {
    constructor(props) {
        super(props);
        this.handleCountryLinkClick = this.handleCountryLinkClick.bind(this);
        this.state = {
        };
    }

    handleCountryLinkClick = (id) => {
        this.props.beginDataFetch();
        this.props.fetchLogEntryDataByCountry(id);
        window.scrollTo(0, 0);
    }

    render() {
        let country = this.props.country
        return (
            <DropdownItem className="justify-content-center">
                <Link
                    className="coral"
                    to={`/country/${country.slug}`}
                    onClick={() => this.handleCountryLinkClick(country.id)}
                >
                    {this.props.display === 'nav' ?
                        <Truncate lines={1} width={150}>  
                                {country.name}
                        </Truncate>:
                        <span>Log Entries</span>
                    }
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

export default connect(mapStateToProps, {fetchLogEntryDataByCountry, beginDataFetch})(CountryLink);
