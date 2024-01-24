import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'

const WorkPage = () => {
  return (
    <Container>
      <h1 className="heading-primary">Work</h1>

      <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
        <NavbarTriggerBtn />
      </div>
    </Container>
  )
}

export default WorkPage
