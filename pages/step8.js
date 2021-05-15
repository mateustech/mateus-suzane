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

      <main className="flex flex-col px-4  w-screen h-screen items-center justify-center py-10">
        <h1 className="text-primary font-semibold text-xl">Obrigado por chegar ate aqui!</h1>
        <h1 className="text-primary font-semibold">Ate breve...</h1>
        <h1 className="text-gray-800 mt-10 font-primary text-4xl">Suzana e Mateus</h1>

        <div className="flex w-full items-center justify-between mt-10 px-10 py-4">
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
