import Head from 'next/head'
import Image from 'next/image';

import heroSVG from 'public/hero.svg';

export default function Home() {
  return (
    <div className="full-wrapper">
      <Head>
        <title>Cátia & Nicolau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container text-center py-3">
        <div className="hero">
          <Image src={heroSVG} alt="Tá top"/>

          <h1>Acompanhem-nos neste dia especial.</h1>
          <div className="celebration-date">
            <p>Sábado</p>
            <h2>03</h2>
            <p>Setembro</p>
            <h3>2022</h3>
          </div>

          <a href="https://goo.gl/maps/FMTdj5UjJ599fP2N8" className="btn btn-primary" target="_blank" rel="noreferrer">
            Direções
          </a>
        </div>
      </main>
    </div>
  )
}