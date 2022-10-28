import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>
        <Navbar />
        <h1>This is the Profile page</h1>
    </div>
  )
}

export default Profile