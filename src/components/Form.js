import "./Form.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastProvider, useToasts } from "react-toast-notifications";
import { toast } from "react-hot-toast";

const Form = () => {

    const form = useRef();

    const emailSucessfull = () => {
        toast.success('Email was sent successfully!',
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    const emailFailed = () => {
        toast.error('There was an error!',
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yhhftig', 'template_rigysf8', form.current, 'Dr-ljlTVVVygIYqfm')
            .then((result) => {
                // reset the form 
                form.current.reset();
                emailSucessfull();
            }, (error) => {
                emailFailed();
            });
    };
    return (

        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label> Your Name </label>
                <input type="text" name="user_name" placeholder="Your Name" />
                <label> Your Email </label>
                <input type="email" name="user_email" placeholder="Your Email" />
                <label> Your Message </label>
                <textarea rows="10" name="message" placeholder="Type your message here" />
                <button className="btn"> Submit </button>


            </form>
        </div>
    )
}

export default Form