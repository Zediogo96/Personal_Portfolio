import "./Form.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yhhftig', 'template_rigysf8', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
                <textarea rows="10" name="message"placeholder="Type your message here" />
                <button className="btn"> Submit </button>

            </form>
        </div>
    )
}

export default Form