import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header/Header";
import SideBar from "./components/SideBar/SideBar";

export default function Layout() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header></Header>
      <main style={{flexGrow: '1'}}>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
