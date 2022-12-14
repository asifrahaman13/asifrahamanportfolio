import React from 'react'
import "./Bouncing.css"

const Bouncing = () => {
  return (
    <>
     <div className="ball">
        <bouncing>
          <ul className="bouncing-ul">
            <li className="bouncing-li"></li>
            <li className="bouncing-li"></li>
            <li className="bouncing-li"></li>
            <li className="bouncing-li"></li>
            <li className="bouncing-li"></li>
          </ul>
        </bouncing>
      </div>
    </>
  )
}

export default Bouncing