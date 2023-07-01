'use client'
import { Suspense, useState, } from "react"
import Loading from "./loading"
import Gem from "./about/gem/page"

const RootLayout = ({ children,}: {children: React.ReactNode}) => {
  const [isLogin,setIsLogin] = useState(true)
  return (
    <html lang="en">
      <body>
        <header>Header
        </header>
        <Suspense fallback={<Loading />}>
          { isLogin ? children:<Gem/>}
        </Suspense>
        <footer>Footer</footer>
      </body>
    </html>
  )
}
export default RootLayout