import './ViewSelector.scss'

export default function ViewSelector({ planet, setView, view }) {
  const handleClick = (event) => {
    if (event.target.className.includes('overview')) {
      setView('OVERVIEW');
    }
    if (event.target.className.includes('structure')) {
      setView('STRUCTURE');
    }
    if (event.target.className.includes('surface')) {
      setView('SURFACE');
    }
  }
  
  return (
    <div className="view-selector" onClick={handleClick}>
      <div 
        className={`view-option overview ${view === 'OVERVIEW' ? `active color-${planet}` : ''}`}
      >
        OVERVIEW
      </div>
      <div
        className={`view-option structure ${view === 'STRUCTURE' ? `active color-${planet}` : ''}`}
      >
        STRUCTURE
      </div>
      <div
        className={`view-option surface ${view === 'SURFACE' ? `active color-${planet}` : ''}`}
      >
        SURFACE
      </div>
    </div>
  )
}