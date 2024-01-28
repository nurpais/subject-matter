import { NextPage } from 'next'
import Container from '@/components/template/Container'

const WorksPage: NextPage = async () => {
  return (
    <Container className="pb-[200px] md:pb-[280px]">
      <h1 className="heading-primary">Work</h1>
    </Container>
  )
}

export default WorksPage
