import "./Contact.css";
import React, { Component } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

class Contact extends Component {
    state = {
        name: "",
        phone: "",
        query: "",
        email: ""
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
        console.log(this.state);
    }
    handleSubmit = e => {
        e.preventDefault();
        // alert("clicked");
        axios.post('https://mailthis.to/restonlakehouse',{
            ...this.state,
            _honeypot:""
        }).then(res=>{
            window.location.href = 'https://mailthis.to/confirm';
        }).catch(err=>{
            console.log(err);
        });
    }
    render() {
        return (
        <div>
            <h1>this is the even more best best updated header</h1>
            <form id="contact-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <br/>
                <InputText id="name" value={this.state.name} onChange={this.handleChange} />
                <br/>
                <label htmlFor="email">Email</label>
                <br/>
                <InputText keyfilter="email" id="email" value={this.state.email} onChange={this.handleChange} />
                <br/>
                <label htmlFor="phone">Phone</label>
                <br/>
                <InputMask mask="(999) 999-9999?" id="phone" value={this.state.phone} onChange={this.handleChange} />
                <br/>
                <label htmlFor="query">Question</label>
                <br/>
                <InputTextarea rows={5} cols={30} autoResize={true} id="query" value={this.state.query} onChange={this.handleChange} />
                <br/>
                <Button label="Submit" className="p-button-raised" />
            </form>    
        </div>
        );
    }
}

export default Contact;