import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {
  IntroPage,
  JoinPage,
  RulesPage,
  GearPage,
  AppRecommendPage,
  CoursePage,
} from "./pages/why-we-run";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-we-run/intro" element={<IntroPage />} />
        <Route path="/why-we-run/join" element={<JoinPage />} />
        <Route path="/why-we-run/rules" element={<RulesPage />} />
        <Route path="/why-we-run/gear" element={<GearPage />} />
        <Route path="/why-we-run/app" element={<AppRecommendPage />} />
        <Route path="/why-we-run/course" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}
