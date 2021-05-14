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
    router.push("/step2");
  };

  const handleBack = () => {
    router.push("/step4");
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

      <main className="flex flex-col w-screen h-screen items-center justify-between py-10">
        <div className="flex flex-col items-center justify-center">
          <main className="flex flex-col  items-center justify-center">
            <h1 className="text-gray-700 font-bold text-2xl">
              Manual Dos Padrinhos
            </h1>
            <h1 className="font-bold text-xl text-primary">
              Paleta de Cores
            </h1>
          </main>
          <div className="flex flex-col w-full mt-4 items-center justify-end ">
            
            <ul className="flex items-center justify-center mt-4">
              {["#ab4a5d", "#8d334d", "#921a3e", "#6f1d34", "#60001c"].map(
                (item) => {
                  return (
                    <li
                      style={{ backgroundColor: item }}
                      className="w-14 h-14 rounded-full m-1"
                    ></li>
                  );
                }
              )}
            </ul>
            <ul className="flex items-center justify-center">
              {["#ab4a5d", "#8d334d", "#921a3e", "#6f1d34", "#60001c"].map(
                (item) => {
                  return (
                    <li
                      style={{ backgroundColor: item }}
                      className="w-14 h-20 rounded m-1"
                    ></li>
                  );
                }
              )}
            </ul>
            <aside className="px-5">
              <img className="w-full rounded mt-4" src="recorte.jpeg" alt="" />
            </aside>
          </div>
          <div className="flex w-full items-center justify-between px-10 py-4 pb-20">
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
              Voltar
            </Button>
            <Button size="small" onClick={handleNext}>
              Próximo
              <KeyboardArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between px-10 py-4"></div>
      </main>
    </div>
  );
}

export default SwipeableTextMobileStepper;
