import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='mw--xl r--ec'>
      <Link href="https://www.linkedin.com/in/artur-blaya-fernandez-470726158/" >Linkedin</Link>
      <Link href="">GitHub</Link>
    </header>
  )
}

export default Header