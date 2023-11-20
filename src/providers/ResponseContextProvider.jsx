'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const ResponseContext = React.createContext()

export default function ResponseContextProvider({ children }) {
  const pathname = usePathname()
  
  useEffect(() => {
    setResponse({ code: 0, message: "" })
  }, [pathname])
  
  const [response, setResponse] = useState({ code: 0, message: "" })

  return (
    <ResponseContext.Provider value={{ response, setResponse }}>
      {children}
    </ResponseContext.Provider>
  )
}