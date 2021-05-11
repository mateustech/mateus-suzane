import Head from "next/head";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Mateus e Suzane</title>
//         <meta name="description" content="Aceita ser nossos padrinhos?" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap" rel="stylesheet"/>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
//           rel="stylesheet"
//         />
//        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"/>
//       </Head>

//       <main className="flex flex-col relative w-screen h-screen items-center justify-center">

//         <h1 className="text-4xl font-secondary text-gray-800"> Aceita ser nossos</h1>
//         <h1 className="font-primary text-primary text-8xl">

//          Padrinhos?
//         </h1>
//       </main>
//     </div>
//   );
// }

import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


function SwipeableTextMobileStepper() {

  const handleNext = () => {
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
              className="flex items-center justify-center"
            >
              <main className="flex flex-col  items-center justify-center">
                <h1 className="text-xl font-secondary text-primary text-center">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti reiciendis, dicta nobis, consectetur tempora maxime, fugiat commodi voluptate exercitationem tempore. Beatae magni et atque impedit quod consequatur temporibus quibusdam.
                </h1>
             
              </main>
            </div>
        <div className="flex w-full items-center justify-between px-10 py-4">
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
