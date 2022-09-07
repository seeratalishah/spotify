import React from 'react'
import {Link} from 'react-router-dom';

function SongCard({imgUrl, title, singersList}) {
  return (
    <div className='song-card'>
        <img src={imgUrl} alt="" />
        <h5>{title}</h5>

        <div className="singers">
            {
                singersList.map((data, index)=>{
                    return <Link to='/singers' key={index} >{data + ', '}</Link>
                })
            }
        </div>
       
    </div>
  )
}

export default SongCard