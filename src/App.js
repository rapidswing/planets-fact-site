import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import HamburgerMenu from "components/HamburgerMenu/HamburgerMenu"
import PlanetImage from "components/PlanetImage/PlanetImage"
import PlanetMenu from "components/PlanetMenu/PlanetMenu"
import StatsBar from "components/StatsBar/StatsBar"
import SummaryCard from "components/SummaryCard/SummaryCard"
import Title from "components/Title/Title"
import ViewSelector from "components/ViewSelector/ViewSelector"

import './App.scss'

export default function App() {
  const [view, setView] = useState('OVERVIEW')
  const [planet, setPlanet] = useState(2)  // Earth as default
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Antonio', 'Spartan']
      }
    })
  })

  const toggleHamburger = () => {
    setIsHamburgerActive(prev => !prev)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="title-hamburger">
          <Title />
          <HamburgerMenu toggleHamburger={toggleHamburger} />
        </div>
        <div className="divider"></div>
        {isHamburgerActive ?
          <PlanetMenu setIsHamburgerActive={setIsHamburgerActive} setPlanet={setPlanet} /> :
          <>
            <ViewSelector planet={planet} setView={setView} view={view} />
            <div className="divider"></div>
            <PlanetImage planet={planet} view={view} />
            <SummaryCard planet={planet} view={view} />
            <StatsBar />
          </>
        }
      </div>
    </div>
  )
}