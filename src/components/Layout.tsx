import { NextPage } from 'next'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const blogName = 'KazuTech blog'
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/me.png"
          alt="KazuTechブログのプロフィール画像"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
        />
        <h1 className={utilStyles.heading2Xl}>{blogName}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
