import { useEffect } from 'react'
import { Overview, MissionAndVision, PressReleases } from '../../components'
import { overviewData } from '../../demoData/data'

const About = () => {
  const { aboutPage: { head, description, title, image } } = overviewData
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <Overview description={description} title={title} image={image} head={head} aboutPage />
      <MissionAndVision />
      <PressReleases />
    </main>
  )
}

export default About