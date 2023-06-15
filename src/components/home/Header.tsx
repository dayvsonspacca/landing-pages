import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="bg-slate-800 bg-opacity-50 flex justify-between flex-row w-full fixed items-center z-50">
      <h1
        className="font-bold text-3xl gradient-text-home ml-16 my-3"
      >
        Landing Pages
      </h1>
      <Link
        prefetch
        target="_blank"
        href="https://github.com/dayvsonspacca/landing-pages"
        className="flex gap-2 items-center bg-slate-950 rounded p-3 mr-16 my-3 hover:bg-slate-900"
      >
        <BsGithub size={32} color="#fff" />
        <p className="text-home-text">Github</p>
      </Link>
    </header>
  );
}
