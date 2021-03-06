import React, { useState, FormEvent } from 'react'
import { navigate } from 'gatsby'

import Copy from './Copy'
import { encodeForm } from '../helpers/form'

const SubscribeForm: React.FunctionComponent = () => {
  const [email, setEmail] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({
        'form-name': 'subscribe',
        email,
      }),
    })
      .then(() => navigate('/subscribed'))
      .catch((error) => alert(error))
  }

  return (
    <form
      className="flex flex-col sm:flex-row items-start sm:items-center mt-3"
      name="subscribe"
      method="post"
      data-netlify="true"
      action="/thanks"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" className="sr-only">
          <Copy>Your email address</Copy>
        </label>

        <input
          className="px-3 py-2 focus:outline-none focus:ring bg-grey-100 dark:bg-grey-800 text-grey-900 dark:text-grey-100 rounded-l rounded-r sm:rounded-r-none"
          type="email"
          name="email"
          id="email"
          placeholder="someone@example.com"
          required
          value={email}
          onChange={handleChange}
        />
      </div>

      <button
        className="px-3 py-2 bg-grey-200 dark:bg-grey-700 dark:text-white mt-2 sm:mt-0 rounded-l rounded-r sm:rounded-l-none focus:outline-none focus:ring"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  )
}

export default SubscribeForm
