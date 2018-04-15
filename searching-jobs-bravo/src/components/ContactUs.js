import React, { Component } from "react";
import '../styles/contactus.css'
//Libraries
import axios from 'axios';


class ContactUsTitle extends Component{
    render(){
        return(
            <div className="contact-us-title">
                <h2>Contact Us</h2>
                <p>Contact Us if you want more information about our
                    products or if you want to work with us</p>
            </div>
        );
    }
}
class ContactUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            your_name: '',
            email: '',
            subject: '',
            message: ''
        };
        this.handleYourNameChange = this.handleYourNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleYourNameChange(evt) {
        this.setState({your_name: evt.target.value});
    }

    handleEmailChange(evt) {
        this.setState({email: evt.target.value});
    }

    handleSubjectChange(evt) {

        this.setState({subject: evt.target.value});
    }

    handleMessageChange(evt) {
        this.setState({message: evt.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();
        var datos = {
            name: this.state.your_name.trim(),
            email: this.state.email.trim(),
            subject: this.state.subject.trim(),
            message: this.state.message.trim()
        };
        alert('Values: ' +JSON.stringify(datos));
        axios({
            url: 'https://test1-61478.firebaseio.com/.json',
            method: 'POST',  //HTTP Method
            data: JSON.stringify(datos),
            timeout: 3000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            //success
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
        }).catch(function (error) {
            //fail
            console.log(error.response);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.statusText);
        });
    }

    render(){
        return (
            <div className="container">
            <ContactUsTitle/>
            <form className="contact-us-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Your Name (required)</label>
                    <input type="text" className="form-control" name="yourname" onChange={this.handleYourNameChange}/>
                </div>
                <div className="form-group">
                    <label>Your Email (required)</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleEmailChange}/>
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control" name="subject" onChange={this.handleSubjectChange}/>
                </div>


                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="5" name="message" onChange={this.handleMessageChange}>

                </textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn ">Send</button>
                </div>
            </form>
            </div>
        );



    }

}

export default ContactUs;