import Link from 'next/link';
import { BsGithub, BsShieldLockFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { ImSvg } from 'react-icons/im';
import LottiePlayer from '../../components/home/LottiePlayer';

export default function Home() {
  return (
    <div className="bg-home-primary overflow-hidden">
      <header className="bg-slate-800 bg-opacity-50 flex justify-around flex-row w-full fixed items-center z-50">
        <div className="relative">
          <h1 className="text-home-text font-bold text-3xl">Landing Pages</h1>
          <div className="absolute w-96 h-64 bg-gradient-home rotate-45 -left-20 -top-24"></div>
        </div>
        <nav className="flex gap-5 text-home-text">
          <a
            className="p-5 w-28 text-center border-b-4 rounded border-b-transparent hover:border-b-home-secondary"
            href="#incio"
          >
            Início
          </a>
          <a
            className="p-5 w-28 text-center border-b-4 rounded border-b-transparent hover:border-b-home-secondary"
            href="#projetos"
          >
            Projetos
          </a>
          <a
            className="p-5 w-28 text-center border-b-4 rounded border-b-transparent hover:border-b-home-secondary"
            href="#sobre"
          >
            Sobre
          </a>
        </nav>
        <div className="relative">
          <Link
            prefetch
            target="_blank"
            href="https://github.com/dayvsonspacca/landing-pages"
            className="flex gap-2 items-center bg-slate-950 rounded p-3 hover:bg-slate-900"
          >
            <BsGithub size={32} color="#fff" />
            <p className="text-home-text">Github</p>
          </Link>
          <div className="absolute w-[40rem] h-64 bg-gradient-home rotate-45 -left-52 -top-16 -z-10"></div>
        </div>
      </header>
      <main id="#inicio" className="flex justify-center items-center flex-col text-home-text pt-24">
        <div className="text-center">
          <h1 className="text-3xl mb-4">
            Coletânea de Lading <span className="text-home-secondary">Pages</span>
          </h1>
          <p>
            Bem-vindo à coleção de landing pages! Esta página abriga uma variedade de landing
            <br />
            pages criadas por mim com o propósito de aprendizado.
          </p>
          <LottiePlayer />
        </div>
        <div className="flex justify-center mb-12 -mt-12 z-10">
          <div className="rounded-lg bg-opacity-25 backdrop-filter backdrop-blur bg-white flex flex-wrap">
            <Link
              href=""
              className="flex flex-col p-5 rounded-lg w-64 h-64 gap-1 hover:bg-home-secondary hover:bg-opacity-50"
            >
              <FaBitcoin size={32} />
              <h1 className="font-bold text-2xl">NitCoin</h1>
              <p>
                A revolucionária criptomoeda que oferece uma abordagem inovadora e segura para
                transações financeiras descentralizadas.
              </p>
            </Link>
            <Link
              href=""
              className="flex flex-col p-5 rounded-lg w-64 h-64 gap-1 hover:bg-home-secondary hover:bg-opacity-50"
            >
              <ImSvg size={32} />
              <h1 className="font-bold text-2xl">Imuai</h1>
              <p>
                Conheça Imuai, a inovadora IA que utiliza sua inteligência para gerar deslumbrantes
                imagens SVG de maneira surpreendente e intuitiva.
              </p>
            </Link>
            <Link
              href=""
              className="flex flex-col p-5 rounded-lg w-64 h-64 gap-1 hover:bg-home-secondary hover:bg-opacity-50"
            >
              <BsShieldLockFill size={32} />
              <h1 className="font-bold text-2xl">DataGuard</h1>
              <p>
                Proteção completa para seus dados, com criptografia, monitoramento e conformidade.
              </p>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-96 h-64 bg-gradient-home rotate-45 left-64 -top-20"></div>
        </div>
      </main>
    </div>
  );
}
