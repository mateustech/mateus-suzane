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
          href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col w-screen h-screen items-center justify-between">
        <div></div>

        {/*<img className="w-20" src="https://static.vecteezy.com/system/resources/previews/001/187/250/non_2x/hearts-paint-png.png" alt=""/>*/}
        <div className="flex items-center justify-center">
          <main className="flex flex-col  items-center justify-center">
            <h1 className="text-4xl text-center font-secondary text-gray-700">
              {" "}
              Ola{" "}
              <h1 className="text-primary">
                {props.p && props.m ? props.p + " e " + props.m : null},
              </h1>{" "}
              temos um convite
            </h1>
            <h1 className="font-secondary text-primary text-4xl">
              Para vocês!
            </h1>
          </main>
        </div>
        <div className="flex w-full items-center justify-end px-10 py-4 pb-20">
         
          <Button size="small" onClick={handleNext}>
            Próximo
            <KeyboardArrowRight />
          </Button>
        </div>
      </main>
    </div>
  );
};
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
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
