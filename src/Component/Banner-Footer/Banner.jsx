import React from 'react';
import './banner-footer-style.css'
import topImage from "../Banner-Footer/banner-main.png"


const Banner = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto  justify-between items-center mt-10 px-4">
            <div className="banner py-25 flex items-center justify-center flex-col rounded-2xl">
                <div>
                    <img src={topImage} alt="hero-logo" />
                </div>
                <div>
                    <h1 className='text-[28px] text-white mt-5 sora font-extrabold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-[22px] text-gray-100 mt-5 sora font-semibold text-center'>Beyond Boundaries Beyond Limits</p>
                </div>
                <div className='w-[175px] border-2 border-amber-200 mx-auto text-center mt-7 p-2.5 rounded-2xl'>
                    <button className="btn bg-[#E7FE29] text-[#131313] rounded-1.5xl">Claim Free Credit</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;