'use client'
import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import Button from '@/components/ui/Button'
import DarkBackgroundSection from '@/components/ui/DarkBackgroundSection'
import clsx from 'clsx'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  business: string
  location: string
  message: string
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission
    console.log(data)
  }
  return (
    <DarkBackgroundSection>
      <Container className="pb-[120px]">
        <h1 className="heading-primary text-white">Contact</h1>

        <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
          <NavbarTriggerBtn />
        </div>

        <main className="mt-2.5 md:mt-[160px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="ml-auto max-w-[406px] rounded-[10px] border border-white bg-dark p-5"
          >
            <h4 className="text-xl font-medium leading-none text-[#FAFAFA] md:text-2xl">Get In Touch.</h4>
            <div className="mt-6 space-y-4">
              <div>
                <input
                  {...register('name', { required: true })}
                  className={clsx(
                    'w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none',
                    errors.name ? 'border-red-500' : 'border-white',
                  )}
                  placeholder="Name"
                />
                {errors.name && <span className="text-xs font-medium text-red-500">Name field cannot be empty.</span>}
              </div>

              <div>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className={clsx(
                    'w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none',
                    errors.email ? 'border-red-500' : 'border-white',
                  )}
                  placeholder="Email"
                />
                {errors.email && <span className="text-xs font-medium text-red-500">Email field cannot be empty.</span>}
              </div>

              <div>
                <input
                  {...register('business', { required: true })}
                  className={clsx(
                    'w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none',
                    errors.business ? 'border-red-500' : 'border-white',
                  )}
                  placeholder="Business"
                />
                {errors.business && (
                  <span className="text-xs font-medium text-red-500">Business field cannot be empty.</span>
                )}
              </div>

              <div>
                <input
                  {...register('location', { required: true })}
                  className={clsx(
                    'w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none',
                    errors.location ? 'border-red-500' : 'border-white',
                  )}
                  placeholder="Location"
                />
                {errors.location && (
                  <span className="text-xs font-medium text-red-500">Location field cannot be empty.</span>
                )}
              </div>

              <div>
                <textarea
                  {...register('message', { required: true })}
                  className={clsx(
                    'w-full border-b bg-transparent pb-1 text-white placeholder:text-[#63625B] focus:outline-none',
                    errors.message ? 'border-red-500' : 'border-white',
                  )}
                  placeholder="How can we help?"
                />
                {errors.message && (
                  <span className="text-xs font-medium text-red-500">How can we help field cannot be empty.</span>
                )}
              </div>

              <div className="mt-[60px]">
                <Button variant="outline" type="submit" className="mt-[60px]">
                  Send
                </Button>
              </div>
            </div>
          </form>
        </main>
      </Container>
    </DarkBackgroundSection>
  )
}

export default ContactPage
