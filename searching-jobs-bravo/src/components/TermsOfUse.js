import React, { Component } from "react";
import LocationSearchInput from "./LocationSearchInput";
import "./../styles/css/style.css";

class TermsOfUse extends Component {
  render() {
    return (
      <div className="landPageContent">
        <div className="jumbotron">
          <form className="formSearch" id="formSearch">
            <div className="row">
              <div className="col-12 text-center ">
                <h1 className="jumbotron-heading">Terms of Use!</h1>
              </div>
            </div>
            <div className="contact-us-title col-12 text-center">
              <h2>What is Bravo job search</h2>
              <p>
                Our mission is to help people everywhere find jobs and companies
                they love. Bravo is one of the growing jobs and recruiting
                sites. Bravo holds a growing database of millions of company
                reviews and more. Unlike other jobs sites, all of this
                information is entirely shared by those who know a company best
                — the employees. Add to that millions of the latest jobs — no
                other site allows you to see which employers are hiring, what
                it's really like to work or interview there according to
                employees, and how much you could earn. Bravo is also available
                via its mobile app on iOS and Android platforms. For employers,
                Bravo offers effective recruiting and employer branding
                solutions via Bravo for Employers. We help thousands of clients
                and partners promote their employer brand to candidates
                researching them and advertise their jobs to ideal candidates
                who may not be aware of them. What differentiates Bravo from
                other recruiting channels is the quality of job candidates we
                deliver and our influence on candidates' decisions as they
                research jobs and companies. Bravo was created by a group of
                students at Universidad de Costa Rica in 2018
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TermsOfUse;
