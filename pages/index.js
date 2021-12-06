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

      <main className="container text-center py-3 px-5">
        <div className="hero">
          <Image src={heroSVG} alt="Cátia e Nicolau"/>
        </div>

        <h2>Acompanhem-nos neste dia especial.</h2>

        <div className="celebration-date row">
          <div className="day d-flex justify-content-center align-items-center">
            <div className="date-text-wrapper d-flex justify-content-end">
              <p className="dashed-value my-0">Sábado</p>
            </div>
            <h2 className="my-0 mx-2 day-value fw-light">03</h2>
            <div className="date-text-wrapper d-flex justify-content-start">
              <p className="dashed-value my-0">Setembro</p>
            </div>
          </div>
          <div className="year fw-light">
            <h3>2022</h3>
          </div>
        </div>

        <div className="row my-3">
          <div className="date-info text-start my-3 col-12 col-md-6 text-center">
            <h1>Data</h1>
            <p className="mb-0">
              A celebração começa às 12 horas do dia 3 de Setembro, de 2022.
            </p>
          </div>

          <div className="location-info text-start my-3 col-12 col-md-6 text-center">
            <h1>Localização</h1>
            <p className="mb-0">
              Pode encontrar direções para a quinta ao carregar no botão abaixo ou <a href="https://goo.gl/maps/FMTdj5UjJ599fP2N8" target="_blank" rel="noreferrer">
              nesta hiperligação</a>.
            </p>
            <p className="mt-0">
              A Quinta do Juncal encontra-se na <strong>Estrada Nacional 114 (N114), Serra d&apos;El-Rei.</strong>
            </p>
            <a href="https://goo.gl/maps/FMTdj5UjJ599fP2N8" className="btn btn-transparent mt-3" target="_blank" rel="noreferrer">
              Direções
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}