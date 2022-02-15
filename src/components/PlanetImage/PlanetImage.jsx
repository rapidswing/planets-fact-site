import data from 'data.json'

import './PlanetImage.scss'

export default function PlanetImage({ planet, view }) {
  const images = require.context('../..', true)

  const getImage = (type) => {
    switch(type) {
      case 'OVERVIEW': {
        return data[planet].images.planet.slice(2)
      }
      case 'STRUCTURE': {
        return data[planet].images.internal.slice(2)
      }
      case 'SURFACE':
      default: {
        return data[planet].images.planet.slice(2)
      }
    }
  }

  const getGeologyImage = () => {
    return data[planet].images.geology.slice(2)
  }

  return (
    <div className="planet-image">
      <img
        className={`planet-image-${planet}`}
        src={images(`./${getImage(view)}`)}
        alt={data[planet].name}
      />
      {view === 'SURFACE' ?
        <img
          className="geology-overlay"
          alt={`${data[planet]} geology`}
          src={images(`./${getGeologyImage()}`)}
        /> :
        undefined
      }
    </div>
  )
}