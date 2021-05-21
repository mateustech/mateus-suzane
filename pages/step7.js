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
  const handleNext = () => {
    router.push("/step8");
  };

  const handleBack = () => {
    router.push("/step6");
  };

  const handleStepChange = (step) => {};
  const handleNot = () => {
    Swal.fire({
      title: "Opss!",
      text: "Não aceitamos um não!",
      imageUrl:
          "https://images6.fanpop.com/image/photos/40700000/Minions-despicable-me-minions-40777765-320-320.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const handleYes = () => {
    Swal.fire({
      title: "Aeeeee!",
      text: "Vamos ao manual dos padrinhos?",
      imageUrl:
          "https://cdn2.scratch.mit.edu/get_image/gallery/27445514_170x100.png",
      imageWidth: 600,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
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

        <main className="flex px-4 lg:px-40 bg-gray-200 flex-col w-screen h-screen items-center justify-between">
          <aside className="flex flex-col items-center justify-center pt-10 lg:pt-20">
            <h1 className="text-primary font-primary text-4xl">Importante!</h1>
            <ul className="flex flex-col w-full items-start justify-center mt-4">
              <li className="flex items-start px-4 py-4">
                <FavoriteIcon className="text-primary" />
                <span className="text-gray-700 ml-2">
              Cheguem com 30 minutos de antecedência no local da cerimônia. Não
              podemos nos atrazar;
            </span>
              </li>
              <li className="flex items-start px-4 py-4">
                <FavoriteIcon className="text-primary" />
                <span className="text-gray-700 ml-2">
              Sintam-se lindos;
            </span>
              </li>
              <li className="flex items-start px-4 py-4">
                <FavoriteIcon className="text-primary" />
                <span className="text-gray-700 ml-2">
              Divirtam-se, esse dia será inesquecível em nossas vidas, e ficamos felizes em poder compartilhar com vocês ao nosso lado!
            </span>
              </li>
            </ul>
          </aside>
          <div className="flex w-full items-center justify-between absolute bottom-0 p-6">
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
              Voltar
            </Button>
            <Button size="small" onClick={handleNext}>
              FIM
              <KeyboardArrowRight />
            </Button>
          </div>
        </main>
      </div>
  );
}

export default SwipeableTextMobileStepper;
