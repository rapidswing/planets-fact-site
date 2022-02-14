import { planets } from 'utils/constants'

import Chevron from 'assets/icon-chevron.svg'

import './PlanetMenuItem.scss'

export default function PlanetMenuItem({ planet }) {
  return (
    <div className="planet-menu-item" data-planet={planet} >
      <div className="planet-dot" style={{ background: planets[planet].dotColor }}></div>
      <div className="planet-name">{planets[planet].name}</div>
      <div className="planet-chevron">
        <img src={Chevron} alt="Chevron" />
      </div>
    </div>
  )
}