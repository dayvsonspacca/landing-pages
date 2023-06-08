import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Header() {
  return (
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
  );
}
