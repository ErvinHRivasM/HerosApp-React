import { Route, Routes } from "react-router";

import { Navbar } from "../ui";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
