import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, About, Gallery, Contact, Course, Courses, Dashboard, Login, Register, StudyPage, PaymentPage } from "./Pages";

// Layout principal con Navbar y Footer
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Layout sin Navbar
const AuthLayout = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que usan el layout principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course/:id" element={<Course />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/studypage" element={<StudyPage />}></Route>
          <Route path="/paymentpage" element={<PaymentPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

        {/* Rutas que usan el layout sin Navbar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
