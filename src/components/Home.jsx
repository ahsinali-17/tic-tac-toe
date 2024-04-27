import React from 'react'
import './HomeStyle.css'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='back flex justify-around items-center h-[100vh] w-[100vw]'>
      <Link to="/player"><button className='start w-52 h-10 font-bold text-sm my-3'>Player vs Player</button></Link>
      <Link to="/computer"><button className='start w-52 h-10 font-bold text-sm my-3'>Player vs Computer</button></Link>
    </div>
  )
}
