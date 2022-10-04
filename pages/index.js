import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Pictures from "../components/Pictures"
import VscoGrid from "../components/VscoGrid";
import { SliderData, VscoCards } from "../components/SliderData";


export default function Home() {
  return (
    <>
          <Hero heading='Kevin Pictures' message='A special place for my pictures!'/>
          <Pictures key='sliderindex' slides={SliderData}/>
          <VscoGrid key='cardsindex' cards={VscoCards}/>
          <Featured />
    </>
  );
}
