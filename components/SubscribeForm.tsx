"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { encodeForm } from "../helpers/form";

const SubscribeForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeForm({
        "form-name": "subscribe",
        email,
      }),
    })
      .then(() => router.push("/subscribed"))
      .catch((error: unknown) => alert(error));
  }

  return (
    <form
      className="flex flex-col sm:flex-row items-start sm:items-center mt-4"
      name="subscribe"
      method="post"
      data-netlify="true"
      action="/thanks"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" className="sr-only">
          Your email address
        </label>

        <input
          className="px-5 py-2 focus:outline-none focus:ring ring-teal-800 dark:ring-teal-500 bg-grey-100 dark:bg-grey-800 text-grey-900 dark:text-grey-100 rounded-l rounded-r sm:rounded-r-none"
          type="email"
          name="email"
          id="email"
          placeholder="someone@example.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button
        className="px-5 py-2 bg-grey-200 dark:bg-grey-700 dark:text-white mt-2 sm:mt-0 rounded-l rounded-r sm:rounded-l-none focus:outline-none focus:ring ring-teal-800 dark:ring-teal-500"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;
