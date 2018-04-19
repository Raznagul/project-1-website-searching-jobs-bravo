import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

class ContentLandPage extends Component {
    render() {
        return (
            <div className="landPageContent">
                <div className="jumbotron">
                    <form className="formSearch" id="formSearch">
                        <div className="row">
                            <div className="col-12 text-center mb-2">
                                <h1 className="jumbotron-heading">Let experts do the searching</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="palabraClave" placeholder="Palabra clave" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div className="form-group">
                                    <LocationSearchInput />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-1 col-lg-1 text-xs-right">
                                <img src={require('./../images/analysis32.png')} className="icon" alt="Buscar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContentLandPage;