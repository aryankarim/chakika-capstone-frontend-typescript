import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({}: any) {
  return (
    <>
      <header className="bg-white z-10 sticky top-0 left-0">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
