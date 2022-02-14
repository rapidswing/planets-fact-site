import { planets } from 'utils/constants'
import data from 'data.json'

import './PlanetImage.scss'

export default function PlanetImage({ planet, view }) {
  const images = require.context('../..', true)

  const getImage = (type) => {
    switch(type) {
      case 'OVERVIEW': {
        return data[planet].images.planet.slice(2);
      }
      case 'STRUCTURE': {
        return data[planet].images.internal.slice(2);
      }
      case 'SURFACE':
      default: {
        return data[planet].images.planet.slice(2);
      }
    }
    
  }

  return (
    <div className="planet-image">
      <img
        // src={images(`./${data[planet].images.planet.slice(2)}`)}
        src={images(`./${getImage(view)}`)}
        alt={data[planet].name}
        height={planets[planet].imageSizes.mobile}
        width={planets[planet].imageSizes.mobile}
      />
    </div>
  )
}