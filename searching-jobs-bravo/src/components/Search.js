import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';

class Search extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit} >
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="keyword" name="keyword" placeholder="Search Keyword" onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <div className="form-group">
                            <LocationSearchInput setLatLong={this.props.setLatLong} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1">
                        <input type="image" alt="Locate" src={require('./../images/analysis32.png')} />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;