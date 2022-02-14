import { planets } from 'utils/constants'
import data from 'data.json'

import './PlanetImage.scss'

export default function PlanetImage({ planet, view }) {
  const images = require.context('../..', true)

  return (
    <div className="planet-image">
      <img
        src={images(`./${data[planet].images.planet.slice(2)}`)}
        alt={data[planet].name}
        height={planets[planet].imageSizes.mobile}
        width={planets[planet].imageSizes.mobile}
      />
    </div>
  )
}