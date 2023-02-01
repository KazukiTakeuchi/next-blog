import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '@/components/Layout'
import { getAllPostIds, getPostData } from 'lib/posts'

type Props = {
  postData: {
    id: string
    contentHTML: string
    title: string
    date: string
    thumbnail: string
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths = () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id)

  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage<Props> = ({ postData }) => {
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
