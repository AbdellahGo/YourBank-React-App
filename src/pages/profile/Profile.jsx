import { useEffect } from 'react'
import { OurTestimonials, UserProfile } from '../../components'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()
    useEffect(() => {
        if (!userData?.isLogin) {
            navigate('/')
        }
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0 })
      }, [])
    return (
        <main>
            <UserProfile />
            <OurTestimonials />
        </main>
    )
}

export default Profile