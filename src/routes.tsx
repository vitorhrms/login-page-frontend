import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./modules/Login";
import { MFA } from "./modules/MFA";

const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mfa" element={<MFA />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRoutes;
