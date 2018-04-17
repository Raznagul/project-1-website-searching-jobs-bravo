import React, { Component } from "react";
import Header from './HeaderMenu';
import ContentLandPage from './ContentLandPage';
import Footer from './Footer';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentLandPage />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
