'use client'
import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import DarkBackgroundSection from '@/components/ui/DarkBackgroundSection'

import ContactForm from '@/components/contact-form'


interface IFormInput {
  name: string
  email: string
  business: string
  location: string
  message: string
}

const ContactPage = () => {
  return (
    <DarkBackgroundSection animate={false}>
      <Container className="pb-[120px]">
        <h1 className="heading-primary text-white">Contact</h1>

        <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
          <NavbarTriggerBtn />
        </div>

        <main className="mt-2.5 md:mt-[160px]">
          <ContactForm />
        </main>
      </Container>
    </DarkBackgroundSection>
  )
}
  
  
  

export default ContactPage
