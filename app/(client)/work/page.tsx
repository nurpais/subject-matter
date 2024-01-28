import { NextPage } from 'next'
import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import { client } from '@/sanity/lib/client'
import WorkCard from '@/components/ui/WorkCard'
import { urlForImage } from '@/sanity/lib/image'

async function getWorks() {
  const query = `*[_type == 'work'] {_id, title, projectLink, thumbnail, mainImage, excerpt, slug, color, _createdAt,
    tags[]-> {name}
  } | order(_createdAt asc)`

  const data = await client.fetch(query)
  return data
}

const WorksPage: NextPage = async () => {
  const works = await getWorks()

  return (
    <Container className="pb-[200px] md:pb-[280px]">
      <h1 className="heading-primary">Work</h1>

      <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
        <NavbarTriggerBtn />
      </div>

      <main className="mt-5 md:mt-[160px] lg:mt-[260px]">
        <div className="works-grid">
          {works.map((work: any) => (
            <div key={work?._id}>
              <WorkCard
                title={work?.title}
                img={urlForImage(work?.thumbnail)}
                link={work?.mainImage !== null ? `/work/${work?.slug?.current}` : work?.projectLink}
                tags={work?.tags}
                desc={work?.excerpt}
                color={work?.color}
              />
            </div>
          ))}
        </div>
      </main>
    </Container>
  )
}

export default WorksPage
