import React, { useState } from 'react'
import PropTypes from 'prop-types'
import data from '../../data/contacts'
import Icon from '../Icon'
import { Link } from '../Link'


export const Contact = (props) => {
  const {
    className,

  } = props

  const [msgForm, setMsgForm] = useState('');
  const [nameForm, setNameForm] = useState('');
  const [emailForm, setEmailForm] = useState('');

  const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/gim;
  let emailValid = 1;

  const removeError = field => {
    const formBox = field.parentElement
    formBox.classList.remove('error')
  }
  
  const showError = (field, message) => {
    const formBox = field.parentElement
    const errorMsg = formBox.querySelector('.contact__form-error')
    formBox.classList.add('error')
    errorMsg.textContent = message
  }

  const validateEmail = (form) => {
    if (emailRegEx.test(email) && form !== '' && message !== '') {
      removeError('email');
      emailValid = 1;
    } else if (email === '') {
      showError('email', 'Email is required');
    } else if (emailRegEx.test(email) && (form !== '' || message !== '')) {
      removeError('email');
    } else if (!emailRegEx.test(email)) {
      showError('email', 'Email is invalid!');
      emailValid = 0;
    }
  };


  const checkForm = (fields) => {

    console.log('Checking form:', fields);
  };



  const checkErrors = () => {

    console.log('Checking errors');
  };

  const handleClick = (e) => {
    e.preventDefault();
    checkForm([msgForm, nameForm, emailForm]);
    validateEmail(emailForm);
    checkErrors();
  };

  const renderListItem = (item, i) => {
    return (
      <li
        key={i}
        className={'list__element'}
      >
        <>
          <Link
            className={'list__link'}
            values={item.data}
          >
          </Link>
          <Icon
            className={'list__icon'}
            icon={item.icon}
          >
          </Icon>
        </>
      </li>
    )
  }

  return (
    <section
      className={`${className ? ` ${className}` : ''}`}
    >
      {<h3 className={'contact__headline headline--h3'}>FORMULARZ KONTAKTOWY</h3>}
      <div className={'contact__box'}>
        <div className={'contact__contacts'}>
          <h4>AGNIESZKA DRAGAŃCZYK</h4>
          <div className={'contacts'}>
            <ul className={'contacts__list list'} >
              {data.profileList.list.map((item, i) => {
                return renderListItem(item, i)
              })}
            </ul>
          </div>
        </div>
        <form className={"contact__form"} id="contact-form">
          <div className={"contact__form-element name"}>
            <label className={"contact__form-label"} for="name">Imię</label>
            <input className={"contact__form-input"} id="name" type="text" name="user_name"
              value={msgForm}
              onChange={(e) => setMsgForm(e.target.value)}
              placeholder="Write your name" />
            <p className={"contact__form-error"}>error</p>
          </div>
          <div className={"contact__form-element email"}>
            <label className={"contact__form-label"} for="email">E-mail</label>
            <input className={"contact__form-input"} id="email" type="email" name="user_email"
              value={nameForm}
              onChange={(e) => setNameForm(e.target.value)}
              placeholder="Write your e-mail" />
            <p className={"contact-form__error"}>error</p>
          </div>
          <div className={"contact__form-element message"}>
            <label className={"contact__form__label"} for="message">Wiadomość</label>
            <textarea className={"contact__form-input"} id="message" placeholder="Wprowadź wiadomość"
              value={emailForm}
              onChange={(e) => setEmailForm(e.target.value)}
              name="message">
            </textarea>
            <p className={"contact__form-error"}>error</p>
          </div>
          <button className={"contact__form-element button"} type="submit" onClick={handleClick}>Wyślij</button>
        </form>
      </div>
      <div className={"contact__background-first"}></div>
      <div className={"contact__background-second"}></div>
      <div className={"contact__background-third"}></div>
      <div className={"contact__background-four"}></div>
    </section>
  )
}

Contact.propTypes = {
  className: PropTypes.string
}

export default Contact
