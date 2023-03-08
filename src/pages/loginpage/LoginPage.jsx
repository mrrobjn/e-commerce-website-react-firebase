import {useEffect} from 'react'
import Login from './Login'
import './LoginPage.scss'

const LoginPage = ({ users}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <section className="login-section" >
        <div className="login-container">
          <div className="login-cover">
            {/* <img src="" alt=""/> */}
          </div>
            <Login users={users}/>
        </div>
    </section>
    </>
  )
}

export default LoginPage