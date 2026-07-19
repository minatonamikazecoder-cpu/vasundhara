import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/layouts/MainLayout";

const Home1Page = lazy(() => import("@/pages/Home1Page"));
const About1Page = lazy(() => import("@/pages/About1Page"));
const Contact1Page = lazy(() => import("@/pages/Contact1Page"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout headerStyle={1} footerStyle={1} />}>
          <Route path="/" element={<Home1Page />} />
          <Route path="/about" element={<About1Page />} />
          <Route path="/contact" element={<Contact1Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
