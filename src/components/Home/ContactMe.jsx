'use client'

import useResponseContext from "@/hooks/useResponseContext"
import { handleResponse } from "@/utils/client/Generic"
import Response from "../Generic/Response"

function ContactMe() {

  const {setResponse } = useResponseContext()

  const responses =
  {
    idle: { code: 0, message: "" },
    loading: { code: 100, message: "" },
    send: { code: 200, message: "" },
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = formData.get('body')
    const from = formData.get('from')
    setResponse(responses.loading)
    const response =
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({ body, from })
      })
    const onSuccess = () => setResponse(responses.send)
    const onError = (error) => {
      setResponse({ code: response.status, message: error.message })
    }
    await handleResponse(response, onSuccess, onError)    
  }

  return (
    <form className="c pg--1" onSubmit={(e) => handleSubmit(e)}>
      <div className="r--sc">
        <h2>Contact Me</h2>
        <Response />
      </div>
      <div className="r">
        <input name='from' type="text" placeholder="from@mail.com / +00 123456789" />
        <button className="gradient-text">Send</button>
      </div>
      <textarea rows="4" name='body' type="text" placeholder="Hi Artur! ..." />
    </form>
  )
}

export default ContactMe


