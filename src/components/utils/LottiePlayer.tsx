'use client';
import HomeLottie from '../../../public/lotties/home-pages.json';
import { Player } from '@lottiefiles/react-lottie-player';

const lotties = {
  'home': HomeLottie,
  'nitcoin': ''
} 

export default function LottiePlayer( props: Lottie) {
  return <Player autoplay loop src={HomeLottie} style={{ height: props.heigth, width: props.width }} />;
}

interface Lottie {
  width: string;
  heigth: string;
  lottie: string;
}
