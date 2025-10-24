import React, { useState, useEffect } from "react";
import userImage from "../../assets/Group.png";
import flagimg from "../../assets/report 1.png";

const PlayerCard = ({ player, setAvailableBalance, availableBallance , purchasePlayer , setPurchasePlayer}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ show: false, type: "", message: "" });
  const [progress, setProgress] = useState(100);


  useEffect(() => {
    let timer;
    if (alertInfo.show) {
      setProgress(100);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            setAlertInfo({ show: false, type: "", message: "" });
            return 0;
          }
          return prev - 2;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [alertInfo.show]);

  // 🔹 button click handler
  const handleSelected = (playerData) => {
    const playerPrice = playerData.price;

    if (availableBallance < playerPrice) {
      setAlertInfo({
        show: true,
        type: "error",
        message: "Not enough coins to select this player!",
      });
      return;
      
      
    }

    setAvailableBalance(availableBallance - playerData.price);
    setIsSelected(true);
    setAlertInfo({
      show: true,
      type: "success",
      message: "Player added successfully!",
    });
    setPurchasePlayer([...purchasePlayer,playerData])
  };

  return (
    <div className="card shadow-sm p-4 rounded-lg bg-white relative">
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
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn sora bg-[#F3F3F3] border-none text-[#000000] shadow 
                       disabled:bg-[#cccccc] disabled:text-[#666666]"
          >
            
            {isSelected ? "Selected ✅" : "Choose Player"}
          </button>
        </div>
      </div>


      {alertInfo.show && (
        <div className="toast toast-top toast-center z-50">
          <div
            role="alert"
            className={`alert w-[320px] ${alertInfo.type === "error" ? "alert-error" : "alert-success"
              }`}
          >
            <span className="font-semibold">{alertInfo.message}</span>
            <div className="w-full h-1 bg-gray-300 rounded mt-2">
              <div
                className="h-1 bg-white rounded transition-all duration-75"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
