import React from 'react'
import { Link } from 'react-router-dom'
function Artist(props) {
  return (
    <div className='col-md-4 col-sm-6 artist'>
        <Link to={props.name}><span className='ps-3'>{props.name}</span></Link>
        <hr className='m-2' />
    </div>
  )
}

export default Artist