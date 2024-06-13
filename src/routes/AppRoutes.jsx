import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Index from "../pages/Index";

export default function AppRoutes() {
  return (
    <BrowserRouter> {/*definindo onde vai ficar meu "roteador" */} 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />

       
      </Routes>
    </BrowserRouter>
  );
}
