import './ViewSelector.scss'

export default function ViewSelector({ planet, setView, view }) {
  return (
    <div className="view-selector">
      <div 
        className={`view-option ${view === 'OVERVIEW' ? `active color-${planet}` : ''}`}
      >
        OVERVIEW
      </div>
      <div className="view-option">
        STRUCTURE
      </div>
      <div className="view-option">
        SURFACE
      </div>
    </div>
  )
}