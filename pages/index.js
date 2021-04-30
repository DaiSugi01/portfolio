import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <Link href="/about-me">
        <a className="text-4xl">
          <p className="text-4xl">Daiki Sugihara</p>
          <p className="text-sm">iOS developer / Backend developer</p>
        </a>
      </Link>
      <Link href="/about-me">
        <a className="text-4xl min-h-screen">
          <p className="text-4xl">Daiki Sugihara</p>
          <p className="text-sm">iOS developer / Backend developer</p>
        </a>
      </Link>
      <Link href="/about-me">
        <a className="text-4xl min-h-screen">
          <p className="text-4xl">Daiki Sugihara</p>
          <p className="text-sm">iOS developer / Backend developer</p>
        </a>
      </Link>
    </Layout>
  )
}
