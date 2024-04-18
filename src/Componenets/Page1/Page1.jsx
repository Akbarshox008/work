import React from 'react'
import logo from './icons/logo.jpg'
const Page1 = () => {
  return (
    <div className='container'>
        <nav className='navbar'>
            <article className="logo">
            <img id='logo' width={'180px'} src={logo} alt="" />
            </article>
            <article className="list">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Info</a>
            </article>
            <button className="btn">
                Sign up
            </button>
            
        </nav>
    </div>
  )
}

export default Page1
