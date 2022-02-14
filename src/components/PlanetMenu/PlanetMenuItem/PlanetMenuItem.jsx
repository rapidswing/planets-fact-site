import { planets } from 'utils/constants'

import Chevron from 'assets/icon-chevron.svg'

import './PlanetMenuItem.scss'

export default function PlanetMenuItem({ index }) {
  return (
    <div className="planet-menu-item">
      <div className="planet-dot" style={{ background: planets[index].dotColor }}></div>
      <div className="planet-name">{planets[index].name}</div>
      <div className="planet-chevron">
        <img src={Chevron} alt="Chevron" />
      </div>
    </div>
  )
}