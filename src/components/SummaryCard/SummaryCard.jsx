import data from 'data.json'

import SourceIcon from 'assets/icon-source.svg'

import './SummaryCard.scss'

export default function SummaryCard({ planet, view }) {
  const getContentOrSource = (type) => {
    let d = data[planet]
    switch(view) {
      case 'OVERVIEW': {
        if (type === 'content') return d.overview.content
        if (type === 'source') return d.overview.source
        return ''
      }
      case 'STRUCTURE': {
        if (type === 'content') return d.structure.content
        if (type === 'source') return d.structure.source
        return ''
      }
      case 'SURFACE': {
        if (type === 'content') return d.geology.content
        if (type === 'source') return d.geology.source
        return ''
      }
      default: {
        return ''
      }
    }
  }

  return (
    <div className="summary-card">
      <div className="summary-name">
        {data[planet].name}
      </div>
      <div className="summary-content">
        {getContentOrSource('content')}
      </div>
      <div className="summary-source">
        Source : <a href={getContentOrSource('source')}>Wikipedia</a>
        <a className="source-new-window" href={getContentOrSource('source')} target="_blank" rel="noreferrer">
          <img src={SourceIcon} alt="Source" />
        </a>
      </div>
    </div>
  )
}