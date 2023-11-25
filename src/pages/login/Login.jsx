import { useEffect } from 'react'
import { CreateAccount, OurTestimonials } from '../../components'


const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <CreateAccount login title='Login' desc='Welcome back! Please log in to access your account.' />
      <OurTestimonials />
    </main>
  )
}

export default Login