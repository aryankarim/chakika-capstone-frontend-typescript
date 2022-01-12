import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/routes/Errors/NotFound";
import LoginPage from "./components/routes/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
