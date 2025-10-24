import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayer = ({ purchasePlayer , removePlayer }) => {
  console.log(purchasePlayer);

  return (
    <div>
      {purchasePlayer.map((player) => (
        <SelectedCard removePlayer = {removePlayer}  player={player} />
      ))}
    </div>
  );
};

export default SelectedPlayer;
