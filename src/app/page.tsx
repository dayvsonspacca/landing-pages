import Link from 'next/link';
import { BsShieldLockFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { ImSvg } from 'react-icons/im';
import LottiePlayer from '../../components/utils/LottiePlayer';
import Header from '../../components/home/Header';

export default function Home() {
  const projetos = [{ nome: '' }];

  return (
    <div className="bg-home-primary overflow-hidden pb-80">
      <Header />
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
