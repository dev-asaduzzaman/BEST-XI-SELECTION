import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayer = ({ playerPromise , setAvailableBalance ,availableBallance , setPurchasePlayer , purchasePlayer }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto mt-10 px-4">
      {playerData.players.map((player) => <PlayerCard setPurchasePlayer = {setPurchasePlayer} purchasePlayer = {purchasePlayer} availableBallance = {availableBallance} setAvailableBalance={setAvailableBalance} player={player}> </PlayerCard>  )
}
    </div>
  );
};

export default AvailablePlayer;
