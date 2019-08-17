import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogEntryDataByCountry } from '../Actions/logEntries';
import { beginDataFetch } from '../Actions/dataFetch';
import { DropdownItem } from 'reactstrap';

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
    }
    render() {
        let country = this.props.country
        return (
            <DropdownItem
                key={country.id}
                className="justify-content-center"
            >
                <Link
                    to={`/country/${country.slug}`}
                    onClick={() => this.handleCountryLinkClick(country.id)}
                >
                    {country.name}
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