import Head from "next/head";
import { useRouter } from 'next/router'

import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


function SwipeableTextMobileStepper() {
  const router = useRouter()
  const handleNext = () => {
    router.push("/step2")
  };
  
  const handleBack = () => {
  };
  
  const handleStepChange = (step) => {
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
          <div>
          </div>
          
          {/*<img className="w-20" src="https://static.vecteezy.com/system/resources/previews/001/187/250/non_2x/hearts-paint-png.png" alt=""/>*/}
          <div
              className="flex items-center justify-center"
          >
            <main className="flex flex-col  items-center justify-center">
              <h1 className="text-4xl font-secondary text-gray-700">
                {" "}
                Ola, temos um convite
              </h1>
              <h1 className="font-secondary text-primary text-6xl">
                Para vocês!
              </h1>
            </main>
          </div>
          <div className="flex w-full items-center justify-between px-10 py-4 pb-20">
            <Button size="small" onClick={handleBack} >
              <KeyboardArrowLeft />
              Voltar
            </Button>
            <Button
                size="small"
                onClick={handleNext}
            >
              Próximo
              <KeyboardArrowRight />
            </Button>
          </div>
        </main>
      </div>
  );
}

export default SwipeableTextMobileStepper;
