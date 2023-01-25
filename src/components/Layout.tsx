import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const blogName = 'KazuTech blog'
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image
          src="/images/me.png"
          alt="KazuTechブログのプロフィール画像"
          width={140}
          height={120}
        />
        <h1>{blogName}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
