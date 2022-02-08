import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-6 items-center bg-lightGreen md:gap-8">
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2 text-sm text-darkGreen space-y-3">
        <p>Having a car problem?</p>
        <h1 className="text-3xl font-bold">We've Got You Covered</h1>
        <p>
          If you're having any car related problems, and you want to fix it
          straight away, Chakika is the way to go, learn about Chakika, and how
          we serve our customers
        </p>

        <Link to="/contact">
          <Button customStyle="bg-darkGreen text-lightGreen hover:bg-darkGreen-darker mt-4">
            Contact Us
          </Button>
        </Link>
      </div>
      <img
        src="/images/logo.png"
        alt="logo"
        className="col-span-3 h-80 w-80 place-self-end hidden md:block"
      />
    </div>
  );
}
