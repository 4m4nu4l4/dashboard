import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Index from "../pages/Index";
import Albuns from "../pages/Albuns";
import Body from "../layout/Body";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/*definindo onde vai ficar meu "roteador" */}
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Index />} />
          <Route path="/albuns" element={<Albuns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
