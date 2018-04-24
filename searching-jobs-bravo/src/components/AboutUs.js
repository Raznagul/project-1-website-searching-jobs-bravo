import React, { Component } from "react";
import LocationSearchInput from "./LocationSearchInput";
import "./../styles/css/style.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="container pt-3 text-center background">

        <div className="border-bottom"><h1>What is Bravo Job Search</h1></div>
        <span className="pt-2">
          Bravo is one of the newest, growing jobs and
                recruiting sites. Bravo holds a big database of millions of
                company reviews and more features. Unlike other jobs sites, all
                of this information is entirely shared by those who know a
                company best — the employees. Add to that millions of the latest
                jobs — no other site allows you to see which employers are
                hiring, what it's really like to work or interview there
                according to employees, and how much you could earn. Bravo is
                also available via its mobile app on iOS and Android platforms.
                For employers, Bravo offers effective recruiting and employer
                branding solutions. We help thousands of clients and partners
                promote their employer brand to candidates researching them and
                advertise their jobs to ideal candidates who may not be aware of
                them. What differentiates Bravo from other recruiting channels
                is the quality of job candidates we deliver and our influence on
                candidates' decisions as they research jobs and companies. Bravo
                was created by a group of students at Universidad de Costa Rica
                in 2018 on the "Diseño of Páginas Web" course
        </span>

        <div className="border-left border-info text-left pt-4 pl-5 pr-5 mt-4">
          <h2>Our Vision</h2>
          <span>
            Create economic opportunities for each member of the global labor market thanks to the continuous development of the first economic graph in the world.
          </span>
        </div>

        <div className="border-right border-info text-right pt-5 pl-5 pr-5">
          <h2>Our Mission</h2>
          <span>
            Our mission is to help people everywhere find jobs and companies
                they love. Organize the information and make it accessible and useful.
              </span>
        </div>
      </div>
    );
  }
}

export default AboutUs;
