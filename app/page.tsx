import Container from '@/components/template/Container'
import Hero from '@/components/template/Hero'
import WorkCard from '@/components/ui/WorkCard'

export default function Home() {
  return (
    <Container>
      <Hero />

      <div className="mt-[150px] md:mt-[220px]">
        <div className="max-w-[600px]">
          <WorkCard
            title="Middlehurst Station"
            img="https://subjectmatter.co.nz/img/works/main/middlehurst/Landing_2023-08-22-234018_sstv.jpg"
            link="https://subjectmatter.co.nz/work/middlehurst"
            tags={['Shopify', 'Theme', 'Development']}
            desc="Our recent work with Middlehurst Station, nestled in New Zealand's Awatere Valley."
          />
        </div>
      </div>
    </Container>
  )
}
