'use client'

import { useEffect } from 'react'

const useBg = (color: string) => {
  useEffect(() => {
    // Set the background color of the body when the component mounts
    document.body.style.backgroundColor = color

    // Clean up the effect by resetting the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [color])
}

export default useBg
