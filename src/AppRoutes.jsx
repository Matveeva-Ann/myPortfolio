import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SkeletonAbout from "./skeleton/SkeletonAbout";
import SkeletonHome from "./skeleton/SkeletonHome";
import SkeletonProjects from "./skeleton/SkeletonProjects";

// Завантаження компонентів затримки
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const Projects = React.lazy(() => import("./pages/ProjectsPage/ProjectsPage"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Suspense fallback={<SkeletonHome></SkeletonHome>}>
          <Home />
        </Suspense>} />
        <Route path='/about' element={<Suspense fallback={<SkeletonAbout></SkeletonAbout>}>
          <About />
        </Suspense>} />
        <Route path='/projects' element={<Suspense fallback={<SkeletonProjects></SkeletonProjects>}>
          <Projects />
        </Suspense>} />
        <Route path='/contacts' element={<Suspense fallback={<div>Loading...</div>}>
          <Contacts />
        </Suspense>} />
      </Route>
    </Routes>
  )
}