import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mateus e Suzane</title>
        <meta name="description" content="Aceita ser nossos padrinhos?" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="font-bold text-gray-800 ml-10"> Aceita ser nossos</h1>
        <h1 className="font-primary text-primary text-6xl">
         
         Padrinhos?
        </h1>
      </main>
    </div>
  );
}
