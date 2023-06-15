import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/home/Header';

import { ImSvg } from 'react-icons/im';

export default function Home() {
  const projetos = [{ nome: '' }];

  return (
    <div className="bg-home-primary overflow-hidden pb-[100rem]">
      <Header />

      <div className="absolute w-full h-72 overflow-hidden flex justify-between">
        <div className="relative float-left bottom-16 left-8 flex-shrink-0">
          <div className="w-96 h-52 rotate-[40deg] bg-gradient-home"></div>
        </div>
        <div className="relative float-right bottom-16 left-20 flex-shrink-0">
          <div className="w-96 h-52 rotate-45 bg-gradient-home"></div>
        </div>
      </div>

      <div id="#inicio" className="flex justify-center items-center flex-col text-home-text pt-24">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-3xl mb-5">
            Coletânea de Lading
            <span className="text-home-secondary gradient-text-home font-bold"> Pages</span>
          </h1>
          <p>
            Bem-vindo à coleção de landing pages! Esta página abriga uma variedade de landing
            <br />
            pages criadas por mim com o propósito de aprendizado.
          </p>
          <Image className="my-10" alt="" src="/svgs/imuai.svg" width={600} height={400} />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-20 overflow-hidden">
        <div className="absolute">
          <div className="relative w-96 h-52 rotate-[40deg] bg-gradient-home right-32 bottom-32"></div>
        </div>

        <div className="col-span-6 flex justify-center items-center flex-col m-5">
          <div className="flex justify-between w-full items-center pr-24 pl-24">
            <h1 className="text-3xl font-bold gradient-text-home">NitCoin</h1>
            <Image alt="" src="/svgs/nitcoin-icon.svg" width={64} height={64} />
          </div>
          <p className="text-home-text text-center pr-16 pl-16 mt-5">
            A NitCoin é uma criptomoeda inovadora que promete revolucionar as transações digitais.
            Com segurança avançada, transações instantâneas e uma interface amigável, a NitCoin
            representa o potencial das criptomoedas para transformar a forma como realizamos
            transações e armazenamos valor.
          </p>
          <Link
            href=""
            className="w-32 h-8 rounded mt-5 font-bold text-home-primary bg-gradient-to-r from-home-secondary 
                     to-home-text flex items-center justify-center shadow-lg shadow-blue-500/50
                       hover:bg-gradient-to-r hover:from-home-secondary/50 hover:to-home-text/50"
          >
            Conheça
          </Link>
        </div>

        <div className="col-span-6 flex justify-center items-center m-5">
          <div className="absolute">
            <div
              className="relative w-52 h-52 blur-lg opacity-10 rounded-full bg-gradient-to-r 
                       from-home-secondary to-home-text bottom-64 left-32"
            ></div>
          </div>
          <Image className="-mr-20 p-0" alt="" src="/svgs/nitcoin.svg" width={400} height={400} />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-28">
        <div className="col-span-6 flex justify-center items-center m-5">
          <Image className="-mr-20 p-0" alt="" src="/svgs/imuai.svg" width={400} height={400} />
        </div>

        <div className="col-span-6 flex justify-center items-center flex-col m-5">
          <div className="flex justify-between w-full items-center pr-24 pl-24">
            <h1 className="text-3xl font-bold gradient-text-home">ImuAI</h1>
            <ImSvg size={60} color="white" />
          </div>
          <p className="text-home-text text-center pr-16 pl-16 mt-5">
            Imuai é uma plataforma revolucionária que simplifica a geração de imagens vetoriais
            complexas. Com segurança avançada, velocidade instantânea e uma interface intuitiva,
            Imuai permite a criação fácil e personalização de gráficos vetoriais impressionantes.
            Sua tecnologia de criptografia protege suas criações, enquanto a interface amigável
            atende a designers de todos os níveis de habilidade. Experimente o potencial ilimitado
            do Imuai e junte-se à revolução na geração de imagens vetoriais.
          </p>
          <Link
            href=""
            className="w-32 h-8 rounded mt-5 font-bold text-home-primary bg-gradient-to-r from-home-secondary 
                     to-home-text flex items-center justify-center shadow-lg shadow-blue-500/50
                       hover:bg-gradient-to-r hover:from-home-secondary/50 hover:to-home-text/50"
          >
            Conheça
          </Link>
        </div>
      </div>
    </div>
  );
}
