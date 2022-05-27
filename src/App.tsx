import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Entry from "./components/routes/Entry/Entry";
import NotFound from "./components/routes/Errors/NotFound";
import Garage from "./components/routes/GaragePage/Garage";
import Home from "./components/routes/Homepage/Home";
import Contact from "./components/routes/ContactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Entry />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
