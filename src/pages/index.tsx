import Head from 'next/head'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Skyjo Score Board</title>
        <meta
          name="description"
          content="A Skyjo score board you can use on your phone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Skyjo</h1>
        <p>How many players today?</p>
        <p>Display range from 2 to 8</p>
        <button>Play</button>
      </main>
    </>
  )
}
