import './StatsBox.scss';

export default function StatsBox({ property, value }) {
  return (
    <div className="stats-box">
      <div className="stats-property">{property}</div>
      <div className="stats-value">{value}</div>
    </div>
  )
}