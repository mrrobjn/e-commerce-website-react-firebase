import {useEffect} from 'react'
import Login from './Login'
import Register from './Register'
import './LoginPage.scss'

const LoginPage = ({ users}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <section className="login-section" style={{paddingTop: 150}}>
        <div className="login-container">
            <Login users={users}/>
            <Register users={users}/>
        </div>
    </section>
    </>
  )
}

export default LoginPage