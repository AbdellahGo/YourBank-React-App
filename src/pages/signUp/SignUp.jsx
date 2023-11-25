import { useEffect } from 'react'
import { CreateAccount, OurTestimonials } from '../../components'


const SignUp = () => {
    useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <main>
      <CreateAccount signUp title='SignUp' desc='Join our community today! Create an account to unlock exclusive features and personalized experiences.' />
      <OurTestimonials/>
    </main>
  )
}

export default SignUp