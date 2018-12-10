import './Contact.css';
import React, { Component } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import { GMap } from 'primereact/gmap';

class Contact extends Component {
  state = {
    name: '',
    phone: '',
    query: '',
    email: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let message = document.getElementById('message-sent');
    axios
      .post('/submit-inquiry', this.state)
      .then(res => {
        message.innerHTML = 'Message Sent Successfully';
        message.setAttribute('style', 'opacity: 1;');
        setTimeout(() => {
          message.setAttribute('style', 'opacity: 0;');
        }, 5000);
        this.setState({ name: '', phone: '', query: '', email: '' });
      })
      .catch(err => {
        message.innerHTML = 'Message Not Sent';
        message.setAttribute('style', 'opacity: 1;');
        setTimeout(() => {
          message.setAttribute('style', 'opacity: 0;');
        }, 5000);
      });
  };
  render() {
    return (
      <div id='contact'>
        <div className='contact-box'>
          <h1>Contact Me</h1>
          <p>If you would like a tour or have further questions</p>
        </div>
        <div className='contact-info'>
          <GMap
            id='gmap'
            options={{ center: { lat: 38.966111, lng: -77.337007 }, zoom: 15 }}
            overlays={[
              new window.google.maps.Marker({
                position: { lat: 38.966111, lng: -77.337007 },
                title: 'Reston Lake House'
              })
            ]}
            style={{
              width: '60%',
              minHeight: '320px'
            }}
          />
          <div className='contact-deets'>
            <h2>1638 Waters Edge Lane</h2>
            <h2>Reston, VA 20191</h2>
            <p>Contact: Joan Harrison</p>
            <p>(571) 449-7136</p>
            <p>
              <a href='mailto:restonlakehouse@gmail.com'>
                RestonLakeHouse@gmail.com
              </a>
            </p>
          </div>
        </div>
        <span id='message-sent' />
        <h2 className='submit-inquiry'>Submit an Inquiry</h2>
        <form id='contact-form' onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <br />
          <InputText
            id='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='email'>Email</label>
          <br />
          <InputText
            keyfilter='email'
            id='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='phone'>Phone</label>
          <br />
          <InputMask
            mask='(999) 999-9999?'
            id='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='query'>Question</label>
          <br />
          <InputTextarea
            rows={5}
            cols={30}
            autoResize={true}
            id='query'
            value={this.state.query}
            onChange={this.handleChange}
          />
          <br />
          <Button label='Submit' className='p-button-raised' />
        </form>
      </div>
    );
  }
}

export default Contact;
