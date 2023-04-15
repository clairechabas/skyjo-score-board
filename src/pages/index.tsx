import Head from 'next/head'
import Image from 'next/image'

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
      <main className="min-h-screen max-w-7xl py-20 mx-auto">
        <div className="flex flex-col items-center">
          <h1>
            <Image
              src="/skyjo-logo.png"
              alt="Skyjo logo"
              width={500}
              height={500}
            />
          </h1>
          <h2 className="text-3xl text-indigo-500">Who's playing today?</h2>

          <form className="flex flex-col justify-center items-stretch w-[30%]">
            <input
              type="text"
              placeholder="Player 1..."
              className="mt-9 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            />
            <input
              type="text"
              placeholder="Player 2..."
              className="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            />
            <button className="mt-4 min-w-40 py-2 rounded-md sm:text-sm border border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition">
              + Add Player
            </button>
            <button
              type="submit"
              className="text-xl rounded-md min-w-40 mt-10 py-3 shadow-lg text-white bg-indigo-500 hover:bg-indigo-600 transition"
            >
              Play!
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
