import Head from "next/head";
import { useRouter } from 'next/router'

import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {Fab} from "@material-ui/core";
import NavigationIcon from '@material-ui/icons/Navigation';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

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
      
            <div
              className="flex flex-col items-center justify-center"
            >
              <main className="flex flex-col  items-center justify-center">
                <h1 className="text-4xl font-secondary text-gray-800">
                  {" "}
                  Aceita ser nossos
                </h1>
                <h1 className="font-primary text-primary text-8xl">
                  Padrinhos?
                </h1>
              </main>
              <div className="flex w-full mt-20 items-center justify-between">
                <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                >
                  <SentimentVeryDissatisfiedIcon  />
                  NÃO!
                </Fab>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                >
                  <SentimentVerySatisfiedIcon  />
                  SIMMM
                </Fab>
              </div>
            </div>
        <div className="flex w-full items-center justify-between px-10 py-4">
   
        </div>
      </main>
    </div>
  );
}

export default SwipeableTextMobileStepper;
