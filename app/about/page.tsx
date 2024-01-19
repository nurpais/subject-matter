'use client'
import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import useBg from '@/hooks/useBg'

const AboutPage = () => {
  useBg('#F26135')

  return (
    <Container className="pb-[200px] md:pb-[280px]">
      <h1 className="heading-primary">About</h1>

      <div className="sticky top-5 mt-20 flex justify-end md:hidden">
        <NavbarTriggerBtn />
      </div>

      <main className="mt-2.5 md:mt-[200px] lg:mt-[320px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full rounded-[10px] border border-black px-2.5 py-2 md:px-5 md:py-4 lg:max-w-[406px]">
            <h2 className="font-tobias text-[35px] font-light leading-none md:text-[45px]">Services</h2>

            <ul role="list" className="mt-[180px] font-medium md:mt-[150px]">
              <li>Art direction</li>
              <li>Concept development</li>
              <li>Creative strategy</li>
              <li>Digital design</li>
              <li>Frontend development</li>
              <li>CMS development</li>
              <li>E-commerce development</li>
              <li>Visual identity</li>
            </ul>
          </div>

          <p className="w-full text-[22px] md:text-[36px] lg:max-w-[690px]">
            Subject Matter is a digital studio that specialises in creative strategy, design and development. We steer
            away from the jargon-heavy complexities of the industry and focus on what matters – people working with
            people.
            <br /> <br />
            Our approach is to warmly and clearly engage in meaningful conversation. For us, the priority is organically
            connecting to create an enduring and out-of-the-box vision for our clients.
            <br /> <br />
            By challenging norms, our work looks and feels different from the rest. We dare our clients to bring us a
            challenge because we love the process of finding the best solutions for them. In return, we challenge our
            clients to embrace a new, forward-thinking method of design that genuinely engages audiences, and is built
            to last.
          </p>
        </div>
      </main>
    </Container>
  )
}

export default AboutPage
