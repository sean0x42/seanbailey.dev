/** @format */

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useStyles } from 'react-treat'
import { Mail } from 'react-feather'
import { navigate } from 'gatsby'

import * as styleRefs from './SubscribeForm.treat'
import { formEncode } from '../helpers/form'

function SubscribeForm() {
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
        'form-name': 'subscribe',
        ...state,
      }),
    })
      .then(() => navigate('/subscribed'))
      .catch((error) => alert(error))
  }

  return (
    <form
      className={styles.form}
      name="subscribe"
      method="post"
      data-netlify="true"
      action="/thanks"
      onSubmit={handleSubmit}
    >
      <div className={styles.icon}>
        <Mail />
      </div>

      <div>
        <h2 className={styles.title}>Get Notified!</h2>
        <p className={styles.copy}>
          Any time I publish an article or create a project, I'll send you an
          email to let you know.{' '}
          <span className={styles.highlight}>100% spam and tracker free!</span>
        </p>
      </div>

      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="someone@example.com"
          required
          onChange={handleChange}
        />
        <button className={styles.send} type="submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default SubscribeForm
