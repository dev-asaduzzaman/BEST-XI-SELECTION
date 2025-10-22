import { Suspense } from 'react'
import './App.css'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import Navbar from './Component/Navbar/Navbar'
import SelectedPlayer from './Component/Selected-Player/SelectedPlayer'

const fetchPlayer = async () => {
  const res = await fetch('/player-info.json')
  return res.json()
}

function App() {
  const playerPromise = fetchPlayer();

  return (
    <>
      <Navbar />
      <Suspense fallback={<div><span className="loading loading-infinity loading-xl"></span>
      </div>}>
        <AvailablePlayer fetchPlayer={playerPromise} />
      </Suspense>
      {/* <SelectedPlayer /> */}

    </>
  )
}

export default App
