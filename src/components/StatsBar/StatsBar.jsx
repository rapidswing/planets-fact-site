import StatsBox from 'components/StatsBox/StatsBox'

import data from 'data.json'
import './StatsBar.scss'

export default function StatsBar({ planet }) {
  return (
    <div className="stats-bar">
      <StatsBox property="ROTATION TIME" value={data[planet].rotation} />
      <StatsBox property="REVOLUTION TIME" value={data[planet].revolution} />
      <StatsBox property="RADIUS" value={data[planet].radius} />
      <StatsBox property="AVERAGE TEMP." value={data[planet].temperature} />
    </div>
  )
}