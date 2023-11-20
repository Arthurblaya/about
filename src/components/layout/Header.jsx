import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='mw--xl r--ec'>
      <Link href="https://www.linkedin.com/in/artur-blaya-fernandez-470726158/" >LinkedIn</Link>
      <Link href="https://github.com/Arthurblaya">GitHub</Link>
    </header>
  )
}

export default Header