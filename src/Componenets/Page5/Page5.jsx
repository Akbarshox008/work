import React from 'react'
import logo from "./icons/logo.jpg"
import location from "./icons/loc.png"
import call from "./icons/call.jpg"
const Page5 = () => {
  return (
    <div className='container'>
        <div className="box4">
      <div className="box5">
      <img width={'200px'} src={logo} alt="" />
        <article className='loc'>
            <img width={'35px'} src={location} alt="" /> <h1>Qashqadaryo,Shakrisabz</h1>
        </article>
        <article className='locs'>
            <img width={'45px'} src={call} alt="" /> <h1>(+998)-77-777-77-77</h1>
        </article>
      </div>
        <article className='link'>
            <h1>Company</h1>
            <h3>About As</h3>
            <h3>News</h3>
        </article>
        <article className='link'>
            <h1>Resources</h1>
            <h3>Dowland app</h3>
            <h3>Blog</h3>
        </article>
        <article className='link'>
            <h1>Support</h1>
            <h3>Help center</h3>
            <h3>Feedback</h3>
        </article>
        </div>
        <p className='hr'></p>
        <article className='footer'>
        <h3>&copy;2024 copyrighter-All rights reserved</h3>
        <article className='fot'>
          <h4>Lorem</h4>
          <h4>Lorem</h4>
          <h4>Lorem</h4>
        </article>
        </article>
    </div>
  )
}

export default Page5
