import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import Navbar from './Component/Navbar/Navbar'
import SelectedPlayer from './Component/Selected-Player/SelectedPlayer'

const fetchPlayer = async () => {
  const res = await fetch('./player-info.json')
  return res.json()
}

function App() {
  const [toggle, setToggle] = useState(true)
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar />
      <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center mt-10 px-4'>
        <h1 className='sora font-bold text-2xl'>Available Player</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`
            px-5 py-2 ${toggle === true ? "bg-[#E7FE29]" : ""} border border-[#F3F3F3] sora text-[16] font-bold rounded-l-2xl cursor-pointer`}>Available</button>
          <button onClick={() => setToggle(false)} className={`
            px-5 py-2 ${toggle === false ? "bg-[#E7FE29]" : ""}  border border-[#F3F3F3] sora text-[16] font-bold rounded-r-2xl cursor-pointer`}>Select <span>{0}</span></button>
        </div>

      </div>

      {
        toggle === true ? <Suspense fallback={<div><span className="loading loading-infinity loading-xl"></span>
        </div>}>
          <AvailablePlayer playerPromise={playerPromise} />
        </Suspense> : <SelectedPlayer />
      }



    </>
  )
}

export default App
