'use client'

import { ResponseContext } from '@/providers/ResponseContextProvider'
import { useContext } from 'react'

function useResponseContext() {

  const {response, setResponse } = useContext(ResponseContext)

  return (
    {response, setResponse }
  )
}

export default useResponseContext