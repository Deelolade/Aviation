import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div className="display">
     <div className="display-main">
     <h1 style={{textAlign:"center"}}> 404</h1>
     <h4 style={{textAlign:"center"}}>Page Not Found</h4>
     <Link to="/" className='NotFoundLink' style={{textAlign:"center"}}>Return to HomePage</Link>
     </div>
      </div>
    </div>
  )
}

export default PageNotFound
