import React, {Component} from "react";
import '../styles/css/contactus.css'
//Libraries
import axios from 'axios';



class ContactUsTitle extends Component {
    render() {
        return (
            <div className="contact-us-title">
                <h2>Contact Us</h2>
                <p>Contact with us if you want more information about our
                    products or if you want to work with us</p>
            </div>
        );
    }
}


class ContactUsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            your_name: '',
            email: '',
            subject: '',
            message: '',
            error:'',
            success:''
        };
        this.handleYourNameChange = this.handleYourNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeError = event => {
        event.preventDefault();
        this.setState({error: null});

    };

    closeSuccess = event => {
        event.preventDefault();
        this.setState({success:null});
    };
    handleYourNameChange(evt) {
        this.setState({your_name: evt.target.value});
        //this.form.validate("yourname");
    }

    handleEmailChange(evt) {
        this.setState({email: evt.target.value});
        //this.form.validate("email");

    }
    handleSubjectChange(evt) {

        this.setState({subject: evt.target.value});
        //this.form.validate("subject");
    }

    handleMessageChange(evt) {
        this.setState({message: evt.target.value});
        //this.form.validate("message");
    }

    handleSubmit(event) {

        event.preventDefault();
        //this.form.validateAll();
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
            //successs
            this.setState({success: response});
            this.setState({error: null});
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
        }).catch(function (error) {
            //fail
            this.setState({error: error});
            this.setState({success: null});
            console.log(error.response);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.statusText);
        });

    }

    render() {
        const { your_name, email, subject, message, error, success } = this.state;
        const isInvalid =
            email === "" || your_name === "" || subject === "" || message === "";
        return (
            <div>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        Oops, your something has gone wrong with you message! Dettails:{" "}
                        {error}
                        <button
                            onClick={this.closeError}
                            type="button"
                            className="close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {success && (
                    <div className="alert " role="alert">
                        Your message has been successfully sent!
                        <button
                            onClick={this.closeSuccess}
                            type="button"
                            className="close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                <form  className="needs-validation contact-us-form" novalidate onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Your Name (required)</label>
                        <input type="text" className="form-control" name="yourname" onChange={this.handleYourNameChange }
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Your Email </label>
                        <input type="email" className="form-control" name="email" onChange={this.handleEmailChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" className="form-control" name="subject" onChange={this.handleSubjectChange}/>
                    </div>


                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="5" name="message" onChange={this.handleMessageChange}
                                  required>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <button  type="submit" className="btn">Send</button>
                    </div>
                </form>
            </div>

        );


    }

}


class ContactUsPage extends Component{

    render(){

        return(

            <div className="container">
                <div className="row">
                    <div class="col-sm ">
                        <ContactUsTitle/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm">
                        <ContactUsForm/>
                    </div>
                </div>


            </div>


        );
    }


}

export default ContactUsPage;