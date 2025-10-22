
import { use } from "react";
import userImage from "../../assets/Group.png";
import flagimg from "../../assets/report 1.png";
const AvailablePlayer = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto mt-10">

{playerData.players.map((player, index) => (
  <div key={index} className="card w-96 shadow-sm p-4">
    <figure>
      <img className="w-[400px] h-[300px]"
        src={player.image_url}
        alt="Shoes"
      />
    </figure>
    <div>
      <h2 className="card-title mt-5 sora">
        <img src={userImage} alt="" /> {player.name}
      </h2>

      <div className="personal-info flex justify-between my-4">
        <div>
          <p className="info-inside flex justify-between">
            <img className="w-[25px]" src={flagimg} alt="" />
            <span className="ml-3 text-[16px] sora">{player.country}</span>
          </p>
        </div>
        <button className="btn sora bg-[#F3F3F3] border-none text-[#000000] shadow">
          {player.role}
        </button>
      </div>

      <hr className="my-4 text-[#F3F3F3]" />

      <div className="card-actions flex justify-between items-center">
        <h3 className="sora font-bold text-xl">Rating</h3>
        <span className="sora font-bold text-xl">{player.rating}</span>
      </div>

      <div className="style flex justify-between my-4">
        <p className="text-[16] sora font-semibold">{player.batting_style }</p>
        <p className="text-[16] sora">{player.bowling_style }</p>
      </div>

      <div className="card-actions flex justify-between items-center mt-4">
        <p className="sora font-bold text-[16]">Price: {player.price }</p>
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
