import Container from '@/components/template/Container'
import NavbarTriggerBtn from '@/components/template/Navbar/NavbarTriggerBtn'
import Button from '@/components/ui/Button'
import DarkBackgroundSection from '@/components/ui/DarkBackgroundSection'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

interface Params {
  params: {
    slug: string
  }
}

interface Tag {
  _id: string
  slug: string
  name: string
}

interface Work {
  title: string
  slug: string
  excerpt: string
  _id: string
  body: any
  tags?: Tag[]
  mainImage: any
  projectLink: string
  images: any[]
  videoLink: string
}

async function getWork(slug: string) {
  const query = `
  *[_type == "work" && slug.current == "${slug}"][0] {
    title,
    slug,
    _id,
    mainImage,
    projectLink,
    body,
    images,
    videoLink,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `

  const work = await client.fetch(query)
  return work
}

const WorkPage = async ({ params }: Params) => {
  const work: Work = await getWork(params?.slug)

  return (
    <div className="pb-[200px] md:pb-[280px]">
      <Container>
        <header className="pt-5">
          <h1 className="font-tobias text-[42px] leading-none md:text-[136px]">{work?.title}</h1>
        </header>
      </Container>

      <div className="sticky top-5 z-40 mt-20 flex justify-end md:hidden">
        <NavbarTriggerBtn />
      </div>

      <Container>
        <div className="mb-5 flex flex-wrap gap-[5px] md:mt-[240px] md:gap-2">
          {work?.tags?.map((tag) => (
            <span key={tag?._id} className="rounded-full border border-dark px-2 py-1 text-xs">
              {tag?.name}
            </span>
          ))}
        </div>
      </Container>

      <Container fluid={true}>
        <Image className="w-full" src={urlForImage(work?.mainImage)} alt="" width="1000" height="1000" />
      </Container>

      <Container className="mt-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
          <div className="sticky top-5 lg:static">
            <Link href={work?.projectLink} target="_blank">
              <Button>Visit Site</Button>
            </Link>
          </div>

          <div className="space-y-4">
            <PortableText value={work?.body} />
          </div>
        </div>
      </Container>

      <Container className="mt-[200px] md:mt-[270px]">
        <DarkBackgroundSection>
          <div className="space-y-5 md:space-y-[200px]">
            {work?.videoLink && <video src={work?.videoLink} autoPlay muted className="w-full" />}
            {work?.images?.map((image) => (
              <Image key={image?._key} src={urlForImage(image)} alt="" width="1000" height="1000" className="w-full" />
            ))}
          </div>
        </DarkBackgroundSection>
      </Container>
    </div>
  )
}

export default WorkPage
