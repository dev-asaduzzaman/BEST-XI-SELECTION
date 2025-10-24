import React from 'react';

const SelectedCard = ({player , removePlayer }) => {
    const handleRemove = () =>{
        removePlayer(player)
    }
    return (
        <div>
            <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center mt-10 px-4'>
              <div className="card  shadow-sm flex-row items-center justify-between p-4 rounded-xl border-[#D9D9D9] w-full">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src={player.image_url}
            alt="Player"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg">{player.name}</h2>
          <p className="text-sm text-gray-500">{player.batting_style}</p>
        </div>
      </div>

      <button onClick={handleRemove} className="btn btn-ghost btn-sm text-error hover:bg-error/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-9 0h10"
          />
        </svg>
      </button>
    </div>
        </div>
        </div>
    );
};

export default SelectedCard;