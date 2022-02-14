import PlanetMenuItem from './PlanetMenuItem/PlanetMenuItem'

import { planets } from 'utils/constants'

import './PlanetMenu.scss'

export default function PlanetMenu({ className, setPlanet, setIsHamburgerActive }) {
  const handleClick = (event) => {
    let closest = event.target.closest('.planet-menu-item')
    if (closest) setPlanet(closest.dataset.planet)
    setIsHamburgerActive(false)
  }

  return (
    <div className={`planet-menu ${className}`} onClick={handleClick}>
      {planets.map((planet, index) => (
        <PlanetMenuItem key={index} planet={index} />
      ))}
    </div>
  )
}