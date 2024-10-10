import React from 'react'

function Loader({
    isfull
}) {
  return (
    <div className={`content-loader ${isfull ? 'full' : ''}`}>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </div>
  )
}

export default Loader