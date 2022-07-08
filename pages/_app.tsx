import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { LayoutContext } from 'Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [winWidth, setWinWidth] = useState<number | undefined>(undefined);
  const [asideWidth, setAsideTranslateX] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    setWinWidth(document?.documentElement.clientWidth)
    const handleResize = () => {
      setWinWidth(document?.documentElement.clientWidth)
    }
    window.addEventListener('resize', handleResize, false)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  


  return <LayoutContext.Provider value={{
    winWidth,
    asideWidth,
    setAsideTranslateX,
    scrollTop,
    headerHeight,
    setHeaderHeight
  }}>
    <Component {...pageProps} />
  </LayoutContext.Provider>
}

export default MyApp
