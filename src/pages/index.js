import Head from 'next/head'
import Image from 'next/image'
import Login from '/home/puneet/Documents/my-app4/components/Login'
import { useAuth } from '/context/AuthContext'
import UserDashboard from '/home/puneet/Documents/my-app4/components/UserDashboard'
export default function Home() {
  const{ currentUser}= useAuth()
  console.log(currentUser)
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {!currentUser && <Login/>}
      {currentUser &&  <UserDashboard/>}
    </>
  )
}
