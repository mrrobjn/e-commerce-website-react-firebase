import React, { useContext, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useNavigate } from 'react-router'
import AdminSideBar from '~/components/admin/AdminSideBar'
import { UserContext } from '~/context/UserContext'
import { auth } from '~/firebase'
import '~~/pages/AdminPage.scss'
const AdminPage = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const users = useContext(UserContext)
  const logUser = users?.find(userss => userss?.data.uid === user?.uid)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate('/login')
    if (logUser?.data.role !== "admin") return navigate('/')
  }, [user])
  return (
    <>
      <div className='admin-container'>
        <AdminSideBar />
        <Outlet />
      </div>
    </>
  )
}

export default AdminPage