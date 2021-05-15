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
import { useRouter } from "next/router";

function SwipeableTextMobileStepper() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/step3");
  };

  const handleBack = () => {

  };

  const handleStepChange = (step) => {};

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

        <div className="flex items-center justify-center">
          <main className="flex flex-col  items-center justify-center">
            <h1 className="text-2xl font-secondary text-gray-700 text-center">
              Vocês foram escolhidos entre tantos<br/>porque queremos que
              <h1 className="font-secondary font-medium text-primary">
                estejam Sempre ao nosso lado</h1>
              de uma maneira especial. <br/>O grande dia esta chegando,<br/>desejamos que
              aproveite cada momento
              <h1 className="font-secondary text-primary">e se divirta bastante!</h1>
            </h1>
          </main>
        </div>
        <div className="flex w-full items-center justify-between px-10 py-4 pb-20">
          <Button disabled size="small" onClick={handleBack}>
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
