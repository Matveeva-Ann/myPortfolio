import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/projects' element={<Projects></Projects>}/>
        <Route path='/contacts' element={<Contacts></Contacts>}/>
      </Route>
    </Routes>
  )
}