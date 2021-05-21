import Head from "next/head";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Fab } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import FavoriteIcon from "@material-ui/icons/Favorite";
function SwipeableTextMobileStepper() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/step7");
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

        <main className="flex lg:px-40 bg-gray-200 flex-col w-screen h-screen items-center justify-between">
          <aside className="flex flex-col items-center justify-center pt-4 lg:pt-20">
            <aside className="px-14">
              <div className="flex items-center justify-center p-2 bg-white rounded">
                <img className="rounded w-60" src="noivos.jpeg"/>
              </div>
            </aside>
            <h1 className="text-primary mt-4 font-primary text-4xl">
              Suzana e Mateus
            </h1>
            <h1 className="text-gray-600 mt-4 font-primary text-xl">
              Obrigado por chegar ate aqui!
            </h1>
            <h1 className="text-gray-700 font-primary text-xl">
              Ate breve...
            </h1>
          </aside>
          <div className="flex w-full items-center justify-start absolute bottom-0 p-6">
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
              Voltar
            </Button>
          </div>
        </main>
      </div>
  );
}

export default SwipeableTextMobileStepper;
