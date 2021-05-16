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
    router.push("/step7");
  };

  const handleBack = () => {
    router.push("/step5");
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

      <main className="flex bg-gray-200 px-4 flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-primary font-primary text-4xl">Querido Padrinho</h1>
        <h1 className="text-center mt-4  text-gray-700">
          Pedimos que use calsa escura com camisa branca. E que tal combinar a
          cor da gravata com a cor do vestido da madrinha?
        </h1>
        <div className="flex flex-col w-full relative items-center justify-start ">
          <ul className="flex w-full items-center justify-center mt-4">
            {["#6f1d34", "#921a3e", "#6f1d34", "#60001c"].map((item) => {
              return (
                <li
                  style={{ backgroundColor: item }}
                  className="w-14 h-14 rounded-full m-1"
                ></li>
              );
            })}
          </ul>
          <div className="flex w-full mt-4 items-start justify-evenly">
            <img
              className="w-32 h-32 rounded-full mt-4"
              src="padrinhos.jpeg"
              alt=""
            />
            <h1 className="font-primary text-4xl">Inspire-se</h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-between absolute bottom-0 px-10 py-4 pb-20">
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
            Voltar
          </Button>
          <Button size="small" onClick={handleNext}>
            Próximo
            <KeyboardArrowRight />
          </Button>
        </div>
      </main>
    </div>
  );
}

export default SwipeableTextMobileStepper;
