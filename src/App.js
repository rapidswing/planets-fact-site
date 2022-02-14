import HamburgerMenu from "components/HamburgerMenu/HamburgerMenu";
import PlanetImage from "components/PlanetImage/PlanetImage";
import PlanetMenu from "components/PlanetMenu/PlanetMenu";
import StatsBar from "components/StatsBar/StatsBar";
import SummaryCard from "components/SummaryCard/SummaryCard";
import Title from "components/Title/Title";
import ViewSelector from "components/ViewSelector/ViewSelector";

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title-hamburger">
          <Title />
          <HamburgerMenu />
        </div>
        <div className="divider"></div>
        <PlanetMenu />
        <ViewSelector />
        <PlanetImage />
        <SummaryCard />
        <StatsBar />
      </div>
    </div>
  );
}