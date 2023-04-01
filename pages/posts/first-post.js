import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
        <h1>First post!</h1>
        <Link href='/' name='Go back to home page'>Go back Home</Link>
      </main>
    </>
  )
}