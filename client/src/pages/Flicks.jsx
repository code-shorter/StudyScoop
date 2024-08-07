import React from 'react';
import '../styles/Style.css';


const FlicksComponent = () => {
  return (
    <div className="bg-black text-white h-screen p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <button className="text-white flex gap-1 items-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <h1 className="text-xl">Flicks</h1>
        </button>
        <div className="top-right-box flex gap-2 items-center">
          <marquee className='used-audio-name px-2 leading-5 max-w-32 overflow-x-hidden whitespace-nowrap bg-[#a1a1aaa8] border-2 border-zinc-500 rounded-full' behavior="scroll" direction="left" speed={60} delay={2} >♪ Jeene laga hoon ♪</marquee>
          <div className="user-audio-container bg-[#a1a1aaa8] w-8 h-8 border-2 border-white rounded-md"></div>
        </div>
      </div>
      <div className="">
        <video src=""></video>
      </div>
      <div className="bottom-part-constrols">
        <div className="flex justify-end mt-20">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center space-y-2">
              <span class="material-symbols-outlined">
                thumb_up
              </span>
              <span>1.2M</span>
            </div>
            <div className="flex flex-col items-center">
              <span class="material-symbols-outlined">
                comment
              </span>
              <span>123K</span>
            </div>
            <div className="flex flex-col items-center">
              <span class="material-symbols-outlined">
                share
              </span>
              <span>1M</span>
            </div>
            <div className="flex flex-col items-center">
              <span class="material-symbols-outlined">
                sms
              </span>
              <span>43K</span>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-between ml-2">
          <div className="mb-2">
            <div className='flex gap-2 mb-2'>
              <img className="w-10 h-10 rounded-full" src="https://placehold.co/100x100" alt="User Avatar" />
              <div className="">
                <p className="font-bold">User123</p>
                <p className="text-zinc-400">@user_123</p>
              </div>
            </div>
            <p>This is a demo title</p>
          </div>
          <button className="text-white absolute bottom-5 right-6">
            <span class="material-symbols-outlined">
              more_vert
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FlicksComponent;
