/** @format */

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { navigate } from 'gatsby'
import { useStyles } from 'react-treat'

import * as styleRefs from './ContactForm.treat'

function formEncode(data: {}) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {
  const [state, setState] = useState({})
  const styles = useStyles(styleRefs)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formEncode({
        'form-name': 'contact',
        ...state,
      }),
    })
      .then(() => navigate('/thanks'))
      .catch((error) => alert(error))
  }

  return (
    <form
      className={styles.form}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="sender"
      action="/thanks"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className={[styles.field, styles.fieldPot].join(' ')}>
        <label htmlFor="sender" className={styles.label}>
          Do not fill out this field
        </label>
        <input
          type="text"
          name="sender"
          className={styles.input}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Someone"
          required
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="someone@example.com"
          required
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          required
          className={styles.input}
          placeholder="..."
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.send}>Send Message</button>
    </form>
  )
}

export default ContactForm
