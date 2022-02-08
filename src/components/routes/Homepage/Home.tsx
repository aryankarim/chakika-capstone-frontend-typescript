import { ReactElement, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "./Header";
import HowWeWork from "./HowWeWork";

export default function Home(): ReactElement {
  const ref = useRef<any>();
  return (
    <Parallax pages={3} ref={ref} className="bg-darkGreen">
      <ParallaxLayer offset={0} className="flex justify-center bg-red-400">
        <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} className="flex justify-center">
        <HowWeWork />
      </ParallaxLayer>
      <ParallaxLayer offset={2} className="flex justify-center">
        <HowWeWork />
      </ParallaxLayer>
    </Parallax>
  );
}
