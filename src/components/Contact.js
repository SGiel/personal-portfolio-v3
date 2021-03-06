import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    // if (e.target.name === 'email') {
    //   const isValid = validateEmail(e.target.value);
    //   console.log(isValid);
    //   // isValid conditional statement
    //   if (!isValid) {
    //     setErrorMessage('Your email is invalid.');
    //   } else {
    //     setErrorMessage('');
    //   }
    // }
    // if (!e.target.value.length) {
    //   setErrorMessage(`${e.target.name} is required.`);
    // } else {
    //   setErrorMessage('');
    // }
    setErrorMessage('');
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    }
    // console.log('errorMessage', errorMessage);

    // We use the spread operator, ...formState, so we can retain the other key-value pairs in this 
    //object. Without the spread operator, the formState object would be overwritten to only contain 
    // the name: value key pair.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // setFormState({...formState, name: e.target.value })
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="col-10" id="hello">
      <div className="hello-form">
        <div className="section-title">
          <h1>Say Hello</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            {/* Used onBlur rather than onChange, because the onBlur attribute will fire the event once the 
          user has changed focus from the input field, */}
            <input className="hello-fi" type="text" defaultValue={name} onMouseLeave={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input className="hello-fi" type="email" defaultValue={email} name="email" onMouseLeave={handleChange} />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea className="hello-fi" name="message" defaultValue={message} onMouseLeave={handleChange} rows="5" />
          </div>
          {/* If errorMessage has a truthy value, the <div> block will render. */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>

        </form>
      </div>
    </section>



  )
}

export default ContactForm;