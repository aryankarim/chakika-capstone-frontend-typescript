import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/routes/Entry/Entry";
import NotFound from "./components/routes/Errors/NotFound";
import LoginPage from "./components/routes/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
