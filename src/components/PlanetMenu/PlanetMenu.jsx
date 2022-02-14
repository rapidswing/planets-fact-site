import PlanetMenuItem from './PlanetMenuItem/PlanetMenuItem'

import { planets } from 'utils/constants'

import './PlanetMenu.scss'

export default function PlanetMenu({ setPlanet, setIsHamburgerActive }) {
  const handleClick = (event) => {
    let closest = event.target.closest('.planet-menu-item')
    if (closest) setPlanet(closest.dataset.planet)
    setIsHamburgerActive(false)
  }
  
  return (
    <div className="planet-menu" onClick={handleClick}>
      {planets.map((planet, index) => (
        <div key={index}>
          <PlanetMenuItem planet={index} />
          <div className="divider"></div>
        </div>
      ))}
    </div>
  )
}