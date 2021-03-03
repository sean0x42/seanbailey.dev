import React, { useState, FormEvent, ChangeEvent } from 'react'
import { navigate } from 'gatsby'

import { encodeForm } from '../helpers/form'

interface State {
  [key: string]: string
}

const SubscribeForm: React.FunctionComponent = () => {
  const [state, setState] = useState({} as State)

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
      body: encodeForm({
        'form-name': 'subscribe',
        ...state,
      }),
    })
      .then(() => navigate('/subscribed'))
      .catch((error) => alert(error))
  }

  return (
    <form
      className="styles.form"
      name="subscribe"
      method="post"
      data-netlify="true"
      action="/thanks"
      onSubmit={handleSubmit}
    >
      <div className="styles.inputGroup">
        <label htmlFor="email">Email</label>
        <input
          className="styles.input"
          type="email"
          name="email"
          id="email"
          placeholder="someone@example.com"
          required
          onChange={handleChange}
        />
      </div>

      <button className="styles.send" type="submit">
        Subscribe
      </button>
    </form>
  )
}

export default SubscribeForm
