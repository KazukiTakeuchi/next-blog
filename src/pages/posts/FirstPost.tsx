import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const FirstPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">ホームへ戻る</Link>
      </h2>
    </>
  )
}

export default FirstPost
