import Link from 'next/link'

export default function FirstPost() {
  return (
    <main>
      <h1>First post!</h1>
      <Link href='/' name='Go back to home page'>Go back Home</Link>
    </main>
  )
}