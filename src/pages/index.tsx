import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '@/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          都内IT企業でWebエンジニアやってる20代の人。2年から3年ほどエンジニアとして働いています。
          <br />
          このブログでは主にプログラミングや技術関連、エンジニア向けに役立つ情報等を書いていきます。
        </p>
      </section>

      <section className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}>💻 技術ブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/egg1.png" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場面はいつなのか
            </Link>
            <br />
            <small className={utilStyles.lightText}>Feburary 23. 2023</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/egg1.png" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場面はいつなのか
            </Link>
            <br />
            <small className={utilStyles.lightText}>Feburary 23. 2023</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/egg1.png" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場面はいつなのか
            </Link>
            <br />
            <small className={utilStyles.lightText}>Feburary 23. 2023</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/egg1.png" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場面はいつなのか
            </Link>
            <br />
            <small className={utilStyles.lightText}>Feburary 23. 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Home
