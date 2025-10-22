import React from "react";
import { use } from "react";

const AvailablePlayer = ({ fetchPlayer }) => {
  const playerData = use(fetchPlayer);
  console.log(playerData);
  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto mt-10">
      <div className="card  w-96 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
