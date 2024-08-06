import React from 'react';
import '../styles/Style.css';

const ICON_CLASS = 'w-6 h-6';
const BUTTON_CLASS = 'text-white';
const FLEX_COL_CLASS = 'flex flex-col';
const ITEMS_CENTER_CLASS = 'items-center';
const SPACE_X_2_CLASS = 'space-x-2';
const SPACE_X_4_CLASS = 'space-x-4';
const SPACE_Y_2_CLASS = 'space-y-2';
const FLEX_1_CLASS = 'flex-1';
const FLEX_CLASS = 'flex';

const FlicksComponent = () => {
  return (
    <div className="bg-black text-white h-screen p-4 flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-xl">Flicks</h1>
      </div>
      <div className="">
      <video src=""></video>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-3 3m0 0l-3-3m3 3V4m0 16v-7m0 0l3 3m-3-3l-3 3"></path>
            </svg>
            <span>1.2M</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8h-5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2h-5l-3 3z"></path>
            </svg>
            <span>123K</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0020 6.618V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1.618a2 2 0 00.447 1.106L15 10zm-6 0l-4.553-2.276A2 2 0 014 6.618V5a2 2 0 012-2h4a2 2 0 012 2v1.618a2 2 0 01-.447 1.106L9 10zm6 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10m10 0H9"></path>
            </svg>
            <span>1M</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-8a2 2 0 012-2h6m0 0V5a2 2 0 012-2h2a2 2 0 012 2v3"></path>
            </svg>
            <span>43K</span>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-between">
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
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FlicksComponent;
