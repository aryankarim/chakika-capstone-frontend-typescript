import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/routes/Entry/Entry";
import NotFound from "./components/routes/Errors/NotFound";
import Home from "./components/routes/Homepage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Entry />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
