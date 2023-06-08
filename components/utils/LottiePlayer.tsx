'use client';
import HomeLottie from '../../public/lotties/home-pages.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function LottiePlayer() {
  return <Player autoplay loop src={HomeLottie} style={{ height: '300px', width: '600px' }} />;
}

interface Lottie {
  width: string;
  heigth: string;
}
