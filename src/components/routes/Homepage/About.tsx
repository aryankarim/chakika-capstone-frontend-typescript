import { ReactElement } from "react";
import aboutimage from "../../../images/chakika.png";

export default function About(): ReactElement {
  return (
    <div className="grid grid-cols-2 bg-lightGreen items-center text-darkGreen">
      <div className="col-span-2 lg:col-span-1 justify-self-center self-end lg:self-center w-4/6">
        <img src={aboutimage} alt="chakika" />
      </div>
      <div className="flex flex-col col-span-2 lg:col-span-1 items-center lg:items-start">
        <h2 className="text-lg md:text-3xl font-bold my-6">What is Chakika?</h2>
        <p className="mx-10 lg:ml-0 lg:mr-20 text-justify text-sm md:text-md">
          Chakika will be a web application for the local community in Kurdistan
          and possibly in Iraq in the long term. Chakika will most likely be the
          first online service working on remote cars by sending dedicated
          technicians or mechanics. This will help in avoiding the frustration
          of going into the market of industrial zones in the Kurdish cities.
          Chakika users will be able to choose the product of their choice, and
          Chakika will help provide the chosen product with the best quality and
          most affordable price in the market, and users have the option to only
          get the item that they bought or acquire the chakika staff to take
          care of the service of applying the chosen product to the user’s car.
        </p>
      </div>
    </div>
  );
}
