import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home1Page from "@/pages/Home1Page";
import About1Page from "@/pages/About1Page";
import Contact1Page from "@/pages/Contact1Page";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={1} footerStyle={1} />}>
        <Route path="/" element={<Home1Page />} />
        <Route path="/about" element={<About1Page />} />
        <Route path="/contact" element={<Contact1Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
