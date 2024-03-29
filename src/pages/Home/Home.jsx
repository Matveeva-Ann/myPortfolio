import Banner from "../../components/Home/Bunner/Banner";
import Header from "../../components/Home/Header/Header";
import Info from "../../components/Home/Info/Info";
import imgBulb from '../../assets/miscellaneous_icons_1.cd3c5e27.svg'; 
import "./Home.scss";
import AboutMe from "../../components/Home/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className="home">
      <div className="home__infoWrapper">
        <Banner></Banner>
        <Info></Info>
      </div>
      <img src={imgBulb} className='imgBulb' alt="" />
      <AboutMe></AboutMe>
    </div>
  );
}
