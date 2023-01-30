import { NextPage } from 'next'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '@/components/Layout'
import { getAllPostIds } from 'lib/posts'

export const getStaticPaths = () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  console.log(postData)
  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
    </Layout>
  )
}

export default Post
みのぐちまゆ
みのぐちまゆ
みのぐちまゆ
竹内一輝
最高のうち心地
いいやんええやんさいこうやんまゆみのぐち
