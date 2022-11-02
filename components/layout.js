import Head from "next/head"
import Header from './header'

export default function Layout({children}){
  return (<div className="bg-white w-[8.5in] h-[11in] p-8">
    <Head>
      <title>New Dell Windows Business Computer Setup Checklist</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="pt-2">{children}</main>

    </div>)
}