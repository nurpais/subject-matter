import Container from '@/components/template/Container'
import Hero from '@/components/template/Hero'
import WorkCard from '@/components/ui/WorkCard'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

async function getWorks() {
  const query = `*[_type == 'work'] {title, thumbnail, excerpt, slug, color, _createdAt,
    tags[]-> {name}
  } | order(_createdAt asc) [0..3]`

  const data = await client.fetch(query)
  return data
}

const Home = async () => {
  const works = await getWorks()

  console.log(urlForImage(works[0]?.thumbnail))

  return (
    <Container>
      <Hero />

      <main className="pb-[200px] pt-[150px] md:pb-[250px] md:pt-[220px]">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <WorkCard
              title={works[0]?.title}
              img={urlForImage(works[0]?.thumbnail)}
              link={`/work/${works[0]?.slug?.current}`}
              tags={works[0]?.tags}
              desc={works[0]?.excerpt}
              color={works[0]?.color}
            />

            <Image className="mt-5" src="/gif/RISHI_1_Pink.gif" alt="" width="544" height="544" />
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            <div className="md:col-span-5 lg:col-span-3">
              <div className="relative flex min-h-[440px] flex-col rounded-[10px] border border-black bg-orange px-2.5 py-2 md:px-5 md:py-4">
                <span className="absolute right-5 top-5">
                  <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.14052 15.6403L14.5539 5.22693" stroke="#302f26" strokeWidth="1.5"></path>
                    <path d="M6.04926 5.14097H14.6399V13.7316" stroke="#302f26" strokeWidth="1.5"></path>
                  </svg>
                </span>

                <h3 className="heading-secondary flex-auto">About</h3>

                <p>
                  Subject Matter is a digital studio that specialises in creative strategy, design and development. We
                  steer away from the jargon-heavy complexities of the industry and focus on what matters – people
                  working with people.
                </p>

                <Link href="/about" className="absolute inset-0">
                  &nbsp;
                </Link>
              </div>
            </div>

            <div className="hidden lg:col-span-2 lg:block">
              <Image src="/gif/RISHI_3_lightgreen.gif" alt="" width="400" height="400" />
            </div>

            <div className="md:col-span-5">
              <WorkCard
                title={works[1]?.title}
                img={urlForImage(works[1].thumbnail)}
                link={`/work/${works[1]?.slug?.current}`}
                tags={works[1]?.tags}
                desc={works[1]?.excerpt}
                color={works[1]?.color}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-10">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative flex min-h-[440px] flex-col rounded-[10px] border border-black bg-dark px-2.5 py-2 text-white md:px-5 md:py-4">
              <span className="absolute right-5 top-5">
                <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.14052 15.6403L14.5539 5.22693" stroke="#fff" strokeWidth="1.5"></path>
                  <path d="M6.04926 5.14097H14.6399V13.7316" stroke="#fff" strokeWidth="1.5"></path>
                </svg>
              </span>

              <h3 className="heading-secondary flex-auto">Contact</h3>

              <p>hello@subjectmatter.co.nz</p>
              <br />
              <p>
                49 Ferry Road
                <br />
                Christchurch, New Zealand
              </p>

              <Link href="/contact" className="absolute inset-0">
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7">
            <WorkCard
              title={works[2]?.title}
              img={urlForImage(works[2].thumbnail)}
              link={`/work/${works[2]?.slug?.current}`}
              tags={works[2]?.tags}
              desc={works[2]?.excerpt}
              color={works[2]?.color}
            />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Home
