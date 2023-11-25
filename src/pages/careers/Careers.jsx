import { useEffect } from 'react'
import { FAQ, CTA, Overview, OurValues, Benefits, JobOpenings } from '../../components'
import { overviewData } from '../../demoData/data'
const Careers = () => {
  const { careersPage: { description, title, image } } = overviewData
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <Overview description={description} title={title} image={image} careersPage />
      <OurValues />
      <Benefits />
      <JobOpenings />
      <FAQ />
      <CTA />
    </main>
  )
}

export default Careers