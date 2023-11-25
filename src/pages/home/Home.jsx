import { useEffect } from 'react'
import { Hero, OurProduct, UseCases, Features, FAQ, CTA, OurTestimonials } from '../../components'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <Hero />
      <OurProduct />
      <UseCases />
      <Features />
      <FAQ />
      <OurTestimonials />
      <CTA />
    </main>
  )
}

export default Home