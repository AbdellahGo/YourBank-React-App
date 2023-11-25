import { useEffect } from 'react'
import { Overview, FAQ, ProtectYou } from '../../components'
import { overviewData } from '../../demoData/data'

const Security = () => {
  const { securityPage: { description, title, image } } = overviewData
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <Overview description={description} title={title} image={image} securityPage />
      <ProtectYou />
      <FAQ />
    </main>
  )
}

export default Security