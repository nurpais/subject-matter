import { NextPage } from 'next'
import BG from '@/components/template/BG'
import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

interface AboutDetails {
  heading: string
  services: string[]
  body: any
}

async function getAboutDetails(): Promise<AboutDetails> {
  const query = `*[_type == 'about'] { heading, services, excerpt, body}[0]`
  const data: AboutDetails = await client.fetch(query)
  return data
}

const AboutPage: NextPage = async () => {
  const aboutDetails: AboutDetails = await getAboutDetails()

  const { heading, services, body } = aboutDetails

  return (
    <BG color="#F26135">
      <Container className="pb-[200px] md:pb-[280px]">
        <h1 className="heading-primary">{heading}</h1>

        <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
          <NavbarTriggerBtn />
        </div>

        <main className="mt-2.5 md:mt-[200px] lg:mt-[320px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="w-full rounded-[10px] border border-black px-2.5 py-2 md:px-5 md:py-4 lg:max-w-[406px]">
              <h2 className="font-tobias text-[35px] font-light leading-none md:text-[45px]">Services</h2>

              <ul role="list" className="mt-[180px] font-medium md:mt-[150px]">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="w-full text-[22px] md:text-[36px] lg:max-w-[690px]">
              <PortableText value={body} />
            </div>
          </div>
        </main>
      </Container>
    </BG>
  )
}

export default AboutPage
