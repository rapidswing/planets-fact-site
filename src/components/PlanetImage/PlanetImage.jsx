import data from 'data.json'

export default function PlanetImage({ planet, view }) {
  let images = require.context('../..', true)
  let img = images(`./${data[planet].images.planet.slice(2)}`)

  return (
    <div className="planet-image">
      {/* <img src={require('../../assets/planet-earth.svg').default} alt={data[planet].name} /> */}
      <img src={img} alt={data[planet].name} />
    </div>
  )
}