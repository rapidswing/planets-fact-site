import './ViewSelector.scss'

export default function ViewSelector({ planet, setView, view }) {
  const handleClick = (event) => {
    if (event.target.closest('.overview')) {
      setView('OVERVIEW')
    }
    if (event.target.closest('.structure')) {
      setView('STRUCTURE')
    }
    if (event.target.closest('.surface')) {
      setView('SURFACE')
    }
  }
  
  return (
    <div className="view-selector" onClick={handleClick}>
      <div 
        className={`view-option overview ${view === 'OVERVIEW' ? `active-view-option color-${planet}` : ''}`}
      >
        <span className="not-for-mobile">01</span><span>OVERVIEW</span>
      </div>
      <div
        className={`view-option structure ${view === 'STRUCTURE' ? `active-view-option color-${planet}` : ''}`}
      >
        <span className="not-for-mobile">02</span><span className="not-for-mobile">INTERNAL</span><span>STRUCTURE</span>
      </div>
      <div
        className={`view-option surface ${view === 'SURFACE' ? `active-view-option color-${planet}` : ''}`}
      >
        <span className="not-for-mobile">03</span><span>SURFACE</span><span className="not-for-mobile">GEOLOGY</span>
      </div>
    </div>
  )
}