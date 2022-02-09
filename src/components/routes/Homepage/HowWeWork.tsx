import { ReactElement } from "react";

export default function HowWeWork(): ReactElement {
  return (
    <div className="flex w-full bg-lightGreen content-center justify-center items-center">
      <div className="grid grid-cols-3 items-top text-darkGreen  md:h-1/2 text-center gap-3">
        <h2 className="col-span-3 text-4xl place-self-center">
          How Chakika Works
        </h2>

        <div className="col-span-3 md:col-span-1 m-5">
          <h4 className="text-lg font-bold">Provide Car Services</h4>
          <p className="text-sm">We provide any car related services</p>
        </div>

        <div className="col-span-3 md:col-span-1 m-5">
          <h4 className="text-lg font-bold">Fix Any Car Related Problems</h4>
          <p className="text-sm">
            We fix any car related problems, repair and replace car parts
          </p>
        </div>

        <div className="col-span-3 md:col-span-1 m-5">
          <h4 className="text-lg font-bold">Provide Car Parts</h4>
          <p className="text-sm">
            Chakika is also an e-commerce website to buy car parts of your own
            wish
          </p>
        </div>
      </div>
    </div>
  );
}
