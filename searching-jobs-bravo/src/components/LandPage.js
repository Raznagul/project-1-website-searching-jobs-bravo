import React, { Component } from 'react';
import Header from './HeaderMenu';
import ContentLandPage from './ContentLandPage';
import Footer from './Footer';

class LandPage extends Component {
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

export default LandPage;
