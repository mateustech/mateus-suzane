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

function SwipeableTextMobileStepper() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/step4");
  };

  const handleBack = () => {
    router.push("/step2");
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
    }).then((result) => {
      router.push("/step4");
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
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex bg-gray-200 flex-col w-screen h-screen items-center justify-center">
        <main className="flex flex-col font-primary items-center justify-center">
          <h1 className="text-4xl  text-gray-700">
            {" "}
            Aceita ser nossos
          </h1>
          <h1 className="text-primary text-6xl">Padrinhos?</h1>
        </main>
        <div className="flex w-full mt-20 items-center justify-center">
          <div 
          className="px-4 py-1 m-1 cursor-pointer flex items-center rounded-full bg-gray-300 "
          onClick={() => handleNot()}>
            <SentimentVeryDissatisfiedIcon className="text-gray-700" />
            <span className="ml-1 text-gray-700 font-bold">Não</span>
          </div>
          <div 
          className="px-4 py-1 m-1 cursor-pointer shadow-xl flex items-center rounded-full bg-primary "
          onClick={() => handleYes()}>
            <SentimentVerySatisfiedIcon className="text-white" />
            <span className="ml-1 text-white font-bold">Claroo!</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SwipeableTextMobileStepper;
