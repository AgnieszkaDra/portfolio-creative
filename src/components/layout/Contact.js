import React, { useState } from 'react'

import { validateForm } from '../../helpers/validator'
import data from '../../data/contacts'
import { Icon, Link, Field }  from '../../components'

import PropTypes from 'prop-types'

export const Contact = (props) => {
  const { className } = props

  const [form, setForm] = useState({
    username: '',
    email: '',
    message: '',
  })

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm(form)
    

    if (errors.email.length > 0 || errors.username.length > 0 || errors.message.length > 0) {
      setValidationErrors(errors)
    } else {
      try {
     
        const webhookUrl = 'https://hook.eu1.make.com/ikj6b4rps7xrvetw13ehaiut4p8ebsgv' 
  
  
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form), 
        })
  
        if (response.ok) {
          alert('Form is sent successfully')
        } else {
          alert('Something went wrong, please try again')
        }
      } catch (error) {
        alert('Error sending form, please try again')
      }
    }
  }

  const renderListItem = (item, i) => {
    return (
      <li key={i} className={'list__element'}>
        <>
          {/* <Link className={'list__link'} values={item.data}></Link> */}
          <Icon className={'list__icon'} icon={item.icon}></Icon>
        </>
      </li>
    )
  }

  return (
    <section className={'section contact'}>
      <div className={'contact__box'}>
        <div className={'contact__contacts'}>
          <h4 className={'contact__name'}>AGNIESZKA DRAGAŃCZYK</h4>
          <div className={'contacts'}>
            <ul className={'contacts__list list'}>
              {data.profileList.list.map((item, i) => {
                return renderListItem(item, i)
              })}
            </ul>
          </div>
        </div>
        <form
          className={'contact__form form'}
          id="contact-form"
          onSubmit={handleSubmit}
        >
        <div className={'contact__form-container'}>
             <Field
            value={form.username}
            type={'input'}
            name="username"
            placeholder="Enter your name"
            label="username"
            onChange={(e) => handleChange(e)}
            error={validationErrors.username}
          ></Field>
          <Field
            value={form.email}
            name="email"
            type={'input'}
            placeholder="Enter your email"
            label="email"
            onChange={(e) => handleChange(e)}
            error={validationErrors.email}
          ></Field>
          <Field
            value={form.message}
            name="message"
            type={'textarea'}
            placeholder="Enter message"
            label="message"
            onChange={(e) => handleChange(e)}
            error={validationErrors.message}
          ></Field>
          <button className={'form__button'} type="submit">
            Wyślij
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}

Contact.propTypes = {
  className: PropTypes.string,
}

export default Contact
