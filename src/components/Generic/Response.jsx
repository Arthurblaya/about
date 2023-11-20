'use client'

import { correct, warning } from "@/Constants"
import Loading from "./Loading"
import useResponseContext from "@/hooks/useResponseContext"

function Response() {
  const {response, setResponse} = useResponseContext()  
  return (
    <>
      {response.code > 0 &&
        <div className="r">
          {response.code >= 100 && response.code < 200 && <Loading />}
          {response.code >= 200 && response.code < 400 && <p>{correct}</p>}
          {response.code >= 400 && response.code < 1000 && <p>{warning}</p>}          
          <p className="gw">{response.message}</p>
        </div>
      }
    </>
  )
}

export default Response