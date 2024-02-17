import { useForm, ValidationError } from '@formspree/react'
import Button from './ui/Button'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xoqgeogr')
  if (state.succeeded) {
    return <p>Thanks for contacting us, we will be in touch shortly.</p>
  }
  return (
    <form className="ml-auto max-w-[406px] rounded-[10px] border border-white bg-dark p-5" onSubmit={handleSubmit}>
      <h4 className="text-xl font-medium leading-none text-[#FAFAFA] md:text-2xl">Want to work with us?</h4>
      <div className="mt-6 space-y-4">
        <div>
          <input
            className="w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none"
            type="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            className="w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      
      <div>
        <input
          className="w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none"
          type="text"
          placeholder="Business"
        />
        <ValidationError prefix="Business" field="business" errors={state.errors} />
      </div>
      <div>
        <input
          className="w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none"
          type="text"
          placeholder="Location"
        />
        <ValidationError prefix="Location" field="Location" errors={state.errors} />
      </div>
      <div>
        <textarea
          className="w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none"
          id="message"
          name="message"
          placeholder="How can we help?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      </div>

      <div className="mt-[60px]">
        <Button variant="outline" type="submit" className="mt-[60px]" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </form>
  )
}
