import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '@/components/Layout'
import { getPostsData } from 'lib/posts'

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
    thumbnail: string
  }[]
}

export const getStaticProps = () => {
  const allPostsData = getPostsData()
  // console.log(allPostsData)

  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => {
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
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={`${styles.thumbnailImage}`}
                />
              </Link>
              <Link href={`/posts/${id}`}>{title}</Link>
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Home
