import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header/Header";
import SideBar from "./components/SideBar/SideBar";

export default function Layout() {
  return (
    <div>
      <Header></Header>
      <main>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
