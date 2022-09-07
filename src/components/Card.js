import React from 'react'


function Card({imgUrl, title}) {
  return (
    <div className="card">
     <img src={imgUrl} alt="" />
     <span>{title}</span>
    </div>
  )
}

export default Card