import Link from 'next/link';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="h-64 bg-gradient-footer-home flex items-center justify-center text-white flex-col gap-5 w-full overflow-hidden">

      <h1 className="font-bold text-3xl ">Landing Pages</h1>
      <p>Venha explorar minhas redes sociais e descobrir outros projetos.</p>
      <div className="flex justify-center gap-5">
        <Link
          prefetch
          target="_blank"
          href="https://github.com/dayvsonspacca"
          className="hover:opacity-60"
        >
          <BsGithub size={32} />
        </Link>
        <Link href="mailto:spacca.dayvson@gmail.com" className="hover:opacity-60">
          <MdEmail size={32} />
        </Link>
        <Link
          prefetch
          target="_blank"
          href="https://www.linkedin.com/in/dayvson-spacca-b88402234/"
          className="hover:opacity-60"
        >
          <BsLinkedin size={32} />
        </Link>
        <Link prefetch target="_blank" href="" className="hover:opacity-60">
          <BsYoutube size={32} />
        </Link>
      </div>
      
      <p className="w-full text-center text-sm border-t-2 border-white pt-5">
        © Copyright dayvsonspacca 2023. Todos direitos reservados.
      </p>
    </footer>
  );
}
