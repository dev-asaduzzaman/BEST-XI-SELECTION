import { use } from "react";
import userImage from "../../assets/Group.png";
import flagimg from "../../assets/report 1.png";

const AvailablePlayer = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto mt-10 px-4">
      {playerData.players.map((player, index) => (
        <div key={index} className="card shadow-sm p-4 rounded-lg bg-white">
          <figure>
            <img
              className="w-full h-84 object-cover rounded"
              src={player.image_url}
              alt={player.name}
            />
          </figure>
          <div>
            <h2 className="card-title mt-4 flex items-center gap-2 sora">
              <img src={userImage} alt="" className="w-6 h-6" />
              {player.name}
            </h2>

            <div className="personal-info flex justify-between items-center my-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={flagimg} alt="" />
                <span className="text-[16px] sora">{player.country}</span>
              </div>
              <button className="btn sora bg-[#F3F3F3] border-none text-[#000000] shadow">
                {player.role}
              </button>
            </div>

            <hr className="my-3 border-[#F3F3F3]" />

            <div className="card-actions flex justify-between items-center">
              <h3 className="sora font-bold text-xl">Rating</h3>
              <span className="sora font-bold text-xl">{player.rating}</span>
            </div>

            <div className="style flex justify-between my-3">
              <p className="text-[16px] sora font-semibold">{player.batting_style}</p>
              <p className="text-[16px] sora">{player.bowling_style}</p>
            </div>

            <div className="card-actions flex justify-between items-center mt-3">
              <p className="sora font-bold text-[16px]">Price: {player.price}</p>
              <button className="btn sora bg-[#F3F3F3] border-none text-[#000000] shadow">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayer;
