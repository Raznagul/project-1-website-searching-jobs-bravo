import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

class ContentLandPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            latitud: '',
            longitud: ''
        }
    }

    onSubmit = event => {
        event.preventDefault();
        //Reddirigir a componente de David (Core)
    }

    setLatLong = (lat, long) => {
        this.setState(
            {
                latitud:lat,
                longitud: long
            }
        );
        
    }

    render() {
        return (
            <div className="landPageContent">
                <div className="jumbotron">
                    <form className="formSearch" id="formSearch" onSubmit={this.onSubmit}>
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
                                    <LocationSearchInput setLatLong = {this.setLatLong} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-1 col-lg-1 text-xs-right">
                                <input type="image" alt="Buscar" src={require('./../images/analysis32.png')} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContentLandPage;