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
    router.push("/step5");
  };

  const handleBack = () => {
    router.push("/step3");
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

      <main className="flex flex-col w-screen h-screen items-center justify-between">
        <div></div>

        <div className="flex flex-col items-center justify-center">
          <main className="flex flex-col  items-center justify-center">
            <h1 className="font-primary text-primary text-4xl">
              Salve esta data!
            </h1>
            <aside className="flex items-center justify-between">
              <FilterVintageIcon className="text-primary" />
              <h1 className="text-gray-700 italic font-medium text-lg mx-2">
                Nosso grande dia
              </h1>
              <FilterVintageIcon className="text-primary" />
            </aside>

            <ul className="grid grid-cols-7 mt-10">
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                D
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                S
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                T
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                Q
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                Q
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                S
              </li>
              <li className="flex items-center justify-center p-2 m-0.5 text-primary font-bold">
                S
              </li>
              <li></li>
              <li></li>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ].map((item) => {
                return (
                  <li
                    key={item}
                    className={`relative z-10 flex items-center justify-center p-2 m-0.5 bg-primary bg-opacity-0 rounded ${
                      item === 26 && "text-white "
                    } font-bold`}
                  >
                    {item === 26 ? (
                      <FavoriteIcon
                        fontSize="large"
                        className="absolute top-1 text-primary  z-10"
                      />
                    ) : null}

                    <span className="relative z-10">{item}</span>
                  </li>
                );
              })}
            </ul>
          </main>
          <h1 className="font-primary text-primary mt-14 text-4xl">
            26 de Junho de 2021
          </h1>
          <div className="flex pt-14 border-t border-primary border-opacity-50 w-full items-center justify-between py-4 pb-20">
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
      </main>
    </div>
  );
}

export default SwipeableTextMobileStepper;
