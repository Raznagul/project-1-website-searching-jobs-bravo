import React, { Component } from 'react';
import './../styles/css/style.css';

class ContentLandPage extends Component {
    render() {
        return (
            <div className="landPageContent">
                <div className="container vertical-center">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="jumbotron-heading">Let experts do the searching</h1>
                                </div>
                            </div>
                            <div className="row no-gutters pt-2">
                                <div className="col-6 pr-1">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="palabraClave" placeholder="Palabra clave" />
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="ubicacion" placeholder="Ubicación" />
                                    </div>
                                </div>
                                <div className="col-1">
                                    <img src={require('./../images/loupe36.png')} className="icon" alt="Buscar" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ContentLandPage;