import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./modules/Login";
import { MFA } from "./modules/MFA";
import { Register } from "./modules/Register";

const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mfa" element={<MFA />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<>Entrou no app</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRoutes;
