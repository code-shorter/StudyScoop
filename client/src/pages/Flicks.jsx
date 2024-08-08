import React, { useState } from 'react';
import '../styles/Style.css';
import AlertBox from '../components/AlertBox';
import LoadingBar from '../components/LoadingBar';

const FlicksComponent = () => {
  const [isShadeVisible, setIsShadeVisible] = useState(false);

  const toggleShade = () => {
    setIsShadeVisible(!isShadeVisible);
  };

  return (
    <div className="outer-container bg-white flex items-center justify-center h-screen w-full lg:py-64">
      <LoadingBar />
      <AlertBox props={{ status: 'showAlert', message: 'Hello Scoopers!' }} />
      <div className="bg-black text-white h-screen w-full md:w-[361px] md:max-h-[642px] lg:rounded-2xl relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full">
          <video 
            src="https://videos.pexels.com/video-files/20321707/20321707-uhd_1440_2560_25fps.mp4" 
            autoPlay 
            loop 
            muted
            className="h-full w-full object-cover">
          </video>
        </div>
        <div className={`controller-cover absolute top-0 left-0 w-full h-full md:max-h-[642px] p-4 flex flex-col justify-between ${isShadeVisible ? 'gradient-shade' : ''}`}>
          <div className="flex items-center justify-between">
            <button className="text-white flex gap-1 items-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <h1 className="text-xl">Flicks</h1>
            </button>
            <div className="top-right-box flex gap-2 items-center">
              <marquee className="used-audio-name px-2 leading-5 max-w-32 overflow-x-hidden whitespace-nowrap bg-[#a1a1aaa8] border-2 border-zinc-500 rounded-full" behavior="slide" loop direction="left">♪ Jeene laga hoon ♪</marquee>
              <div className="user-audio-container bg-[#a1a1aaa8] w-8 h-8 border-2 border-white rounded-md"></div>
            </div>
          </div>
          <div className="bottom-part-constrols">
            <div className="flex justify-end mt-20">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center space-y-2 cursor-pointer">
                  <span className="material-symbols-outlined">thumb_up</span>
                  <span>1.2M</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="material-symbols-outlined">comment</span>
                  <span>123K</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="material-symbols-outlined">share</span>
                  <span>1M</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="material-symbols-outlined">sms</span>
                  <span>43K</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between ml-2">
              <div className="mb-2">
                <div className="flex gap-2 mb-2 cursor-pointer">
                  <img className="w-10 h-10 rounded-full" src="https://placehold.co/100x100" alt="User Avatar" />
                  <div>
                    <p className="font-bold">User123</p>
                    <p className="text-zinc-400">@user_123</p>
                  </div>
                </div>
                <details>
                  <summary className='font-[500] cursor-pointer' title={`Click to ${isShadeVisible ? 'close' : 'read'} description`} onClick={toggleShade}>
                    This is a demo title
                  </summary>
                  <p className='mt-2 text-zinc-200 font-[300]'>This is an AI generated paragraph vfvm ntrntsht rt rg rtrs tgerrkthtn r.</p>
                </details>
              </div>
              <button className="text-white absolute bottom-5 right-6">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlicksComponent;
