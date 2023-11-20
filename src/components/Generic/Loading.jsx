"use client"

import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"

function Loading({ loading }) {

  const [color, setColor] = useState()

  useEffect(() => {
    setColor(
      getComputedStyle(document.documentElement).getPropertyValue('--color-1'),
    )
  }, [loading])

  return (<>
      {color &&
        <RotatingLines
          strokeColor={color}
          strokeWidth="5"
          animationDuration="0.75"
          visible={loading}
          width={`${1}em`}
          height={`${1}em`}
        />
      }
  </>)
}

export default Loading