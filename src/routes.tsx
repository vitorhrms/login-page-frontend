import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./modules/Login";

const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mfa" element={<>mfa</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRoutes;
