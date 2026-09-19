import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { About, VisionMission, Quality, Roadmap } from "./pages/Company";
import { ProductsIndex, HairCare, Syrups, Nutrition, ProductDetail } from "./pages/Products";
import { Manufacturing, Partners, Distribution, Founders } from "./pages/Business";
import { Contact, NotFound } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="hair-care" element={<HairCare />} />
          <Route path="syrups" element={<Syrups />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="quality" element={<Quality />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="manufacturing-partners" element={<Partners />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="founders" element={<Founders />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
