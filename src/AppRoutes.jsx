import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Завантаження компонентів затримки
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const Projects = React.lazy(() => import("./pages/ProjectsPage/ProjectsPage"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>} />
        <Route path='/projects' element={<Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>} />
        <Route path='/contacts' element={<Suspense fallback={<div>Loading...</div>}>
          <Contacts />
        </Suspense>} />
      </Route>
    </Routes>
  )
}