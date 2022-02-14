import PlanetMenuItem from './PlanetMenuItem/PlanetMenuItem'

import { planets } from 'utils/constants'

import './PlanetMenu.scss'

export default function PlanetMenu() {
  return (
    <div className="planet-menu">
      {planets.map((planet, index) => (
        <>
          <PlanetMenuItem index={index} />
          <div className="divider"></div>
        </>
      ))}
    </div>
  )
}