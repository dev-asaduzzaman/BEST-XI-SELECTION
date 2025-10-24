import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import Navbar from './Component/Navbar/Navbar'
import SelectedPlayer from './Component/Selected-Player/SelectedPlayer'
import Banner from './Component/Banner-Footer/Banner'

const fetchPlayer = async () => {
  const res = await fetch('./player-info.json')
  return res.json()
}
const playerPromise = fetchPlayer();
function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBallance,setAvailableBalance] = useState(6000000)
  const [purchasePlayer , setPurchasePlayer] = useState([])

  const removePlayer = (p) => {
  const filterData = purchasePlayer.filter(ply => ply.id !== p.id);
  setPurchasePlayer(filterData);
  availableBallance(availableBallance + p.price)
};
  
  return (
    <>
      <Navbar availableBallance={availableBallance} />
      <Banner></Banner>
      <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center mt-10 px-4'>
        <h1 className='sora font-bold text-2xl'>{
          toggle === true?"Available Players":`Selected Player (${purchasePlayer.length}/6)`
          }</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`
            px-5 py-2 ${toggle === true ? "bg-[#E7FE29]" : ""} border border-[#F3F3F3] sora text-[16] font-bold rounded-l-2xl cursor-pointer`}>Available</button>
          <button onClick={() => setToggle(false)} className={`
            px-5 py-2 ${toggle === false ? "bg-[#E7FE29]" : ""}  border border-[#F3F3F3] sora text-[16] font-bold rounded-r-2xl cursor-pointer`}>Select <span>{purchasePlayer.length}</span></button>
        </div>

      </div>

      {
        toggle === true ? <Suspense fallback={<div><span className="loading loading-infinity loading-xl"></span>
        </div>}>
          <AvailablePlayer purchasePlayer = {purchasePlayer} setPurchasePlayer = {setPurchasePlayer} availableBallance = {availableBallance} setAvailableBalance = {setAvailableBalance} playerPromise={playerPromise} />
        </Suspense> : <SelectedPlayer removePlayer = {removePlayer} purchasePlayer = {purchasePlayer}  />
      }



    </>
  )
}

export default App
