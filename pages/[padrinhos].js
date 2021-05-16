import Head from "next/head";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Home = (props) => {
  const router = useRouter();

  const handleNext = () => {
    router.push("/step2");
  };


  return (
    <div>
      <Head>
        <title>Mateus e Suzane</title>
        <meta name="description" content="Aceita ser nossos padrinhos?" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex bg-gray-200 flex-col w-screen h-screen items-center justify-center">
     

        <aside className="flex flex-col text-4xl font-primary items-center justify-center">
            <h1 className=" text-center text-gray-700">
              Ola
              <h1 className="text-primary">
                {props.p && props.m ? props.p + " e " + props.m : null},
              </h1>
              temos um convite
              <h1 className="text-primary">
              Para vocês!
            </h1>
            </h1>
          </aside>
        <div className="flex w-full absolute bottom-0 bg-gray-200 items-center justify-end px-10 py-4 pb-20">
          <Button size="small" onClick={handleNext}>
            Próximo
            <KeyboardArrowRight />
          </Button>
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { padrinhos: "Antonio filho-Claudinha" } }, // See the "paths" section below
      { params: { padrinhos: "Talison-Damarys" } }, // See the "paths" section below
      { params: { padrinhos: "Luciano-Kallyane" } }, // See the "paths" section below
      { params: { padrinhos: "Erismar-Edna" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const [p, m] = params.padrinhos.split("-");
  return {
    props: {
      p,
      m,
    }, // will be passed to the page component as props
  };
}
export default Home;
