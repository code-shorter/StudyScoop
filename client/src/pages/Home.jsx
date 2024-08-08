import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import LoadingBar from '../components/LoadingBar';
import AlertBox from '../components/AlertBox';
import HomeBox from '../components/HomeBox';
import '../styles/Style.css';
import { loggedInUser, quickUser } from '../ComponentApi';
import SideTab from '../components/profile components/SideTab';
import { Link } from 'react-router-dom';

function Home() {
  const user = loggedInUser;
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [containerHeight, setContainerHeight] = useState('0px');
  const flicksId = 'cdcfvfdfef';

  const toggleUserVisibility = () => {
    if (visibleUsers.length === 0) {
      setVisibleUsers(quickUser);
    } else {
      setVisibleUsers([]);
    }
  };

  const updateContainerHeight = () => {
    const newHeight = visibleUsers.length <= 4 ? `${visibleUsers.length * 50}px` : '200px'; // assuming each user div is 50px tall
    setContainerHeight(newHeight);
  };

  useEffect(() => {
    updateContainerHeight();
  }, [visibleUsers]);

  var bottomCoverClass;
  var bottomBoxVisible;
  var upperCustomBoxVisible;
  var headLogoVisiblity;
  if (window.screen.width >= 1024) {
    headLogoVisiblity = false;
  } else {
    headLogoVisiblity = true;
  }
  if (window.screen.height < 600) {
    bottomCoverClass = 'hidden';
  } else {
    bottomCoverClass = '';
  }
  if (window.screen.height > 856 && window.screen.width < 1024) {
    bottomBoxVisible = 'block';
  } else {
    bottomBoxVisible = 'hidden';
  }
  if (window.screen.height > 800 && window.screen.width < 1280) {
    upperCustomBoxVisible = 'hidden';
  } else if (window.screen.width >= 768) {
    upperCustomBoxVisible = 'block';
  } else {
    upperCustomBoxVisible = 'hidden';
  }
  return (
    <div className={`main-container w-full h-full`}>
      <LoadingBar />
      <AlertBox props={{ status: 'showAlert', message: 'Hello Scoopers!' }} />
      <div className="left-nav-bracket w-0 lg:w-[330px] xl:w-[300px] min-[2560px]:w-[275px] bg-white"></div>
      <div className="nav-container bg-white">
        <div className="desktop-nav-content">
          <Link to='/home'><div className="platform-name hidden lg:block font-[amaranth] text-3xl p-2 cursor-pointer text-center select-none" title='Home'>StudyScoop</div></Link>
          <Nav currentPage="profile" user={loggedInUser} />
        </div>
        <Link to='/setting' className=''>
          <div className="nav-setting hidden lg:flex gap-4 my-4 pt-4 border-t-2 border-black" title='Setting'>
            <div className="nav-setting-icon ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
            </div>
            <div className="nav-title">Setting</div>
          </div>
        </Link>
      </div>
      <main className='w-full'>
        <Header logoname={headLogoVisiblity} />
        <div className="w-full px-5 py-7 xl:mt-8">
          <div className="top-cover w-full flex justify-center gap-4 xl:gap-6">
            <div className="left-cover flex flex-col gap-3 min-[425px]:gap-1 md:gap-4 xl:gap-6 md:flex-row md:items-end">
              <Link to={"/flicks/" + flicksId}>
                <div className="preview-flicks-container gradient-box min-w-[130px] lmobile:min-w-[150px] mobile:min-w-[170px] min-h-[300px] lmobile:min-h-[330px] mobile:min-h-[370px] md:h-[400px] xl:h-[500px] lg:w-[200px] xl:w-[270px] rounded-2xl bg-[#EC7063] flex flex-col justify-between">
                  <div className="font-[aBeeZee] w-full text-center text-white py-1 text-md xl:text-xl">Get Motivate</div>
                  <div className="font-[aBeeZee] w-full text-white p-2 text-[12px] md:text-[14px] xl:text-base flex justify-between">
                    <span>@user_123</span>
                    <span>1.3M</span>
                  </div>
                </div>
              </Link>
              <div>
                <div className="bottom-box-lh w-full mb-4 xl:mb-6">
                  <div className={`h-[160px] xl:h-[370px] gradient-2box flex-1 bg-[#EC7063] shadow-[0_0_10px_0px_#00000052] rounded-2xl font-[aBeeZee] w-full text-white py-1 px-4 text-md flex items-end justify-start ${upperCustomBoxVisible}`}>Custom</div>
                </div>
                <div className="upload-post min-w-[130px] lmobile:min-w-[160px] xl:w-[200px] md:h-[100px] bg-white flex flex-col xl:gap-1 justify-center items-center shadow-[0_0_10px_0px_#00000052] p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
                  </svg>
                  <p className="font-[aBeeZee] text-md">New Post</p>
                </div>
              </div>
            </div>
            <div className="right-cover flex flex-col gap-4 xl:gap-6">
              <HomeBox props={{ title: 'Your Library', img: '' }} />
              <HomeBox props={{ title: 'Explore Posts', img: '' }} />
            </div>
          </div>
          <div className="bottom-box-lh w-full mt-5 mb-4 px-3 min-[412px]:px-5 min-[430px]:px-4 md:px-[68px] min-[820px]:px-24 min-[912px]:px-36">
            <div className={`h-[150px] gradient-2box flex-1 bg-[#EC7063] shadow-[0_0_10px_0px_#00000052] rounded-2xl font-[aBeeZee] w-full text-white py-1 px-4 text-md flex items-end justify-start ${bottomBoxVisible}`}>Custom</div>
          </div>
          <div className={`bottom-cover w-full mt-8 mb-8 fixed max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 px-4 sm:px-8 bottom-8 lg:bottom-2 xl:bottom-4 lg:w-[400px] ${bottomCoverClass}`}>
            <div className="w-full">
              <div className={`quick-message-container w-full flex flex-col justify-between items-center bg-white shadow-[0_0_10px_0px_#00000052] rounded-xl p-3`}>
                <div className="message-user-container w-full" style={{ height: containerHeight, overflowY: visibleUsers.length > 4 ? 'scroll' : 'hidden', transition: 'height 0.3s ease', scrollSnapType: 'y mandatory' }}>
                  {
                    visibleUsers.map((users, index) => (
                      <div key={index} className="quick-message-user bg-white flex gap-4 w-full p-2 px-4 lg:hover:bg-zinc-300 active:bg-zinc-300 rounded-md duration-200 items-center" style={{ scrollSnapAlign: 'start' }}>
                        <div className="user-changer rounded-full w-8 h-8 flex items-center justify-center overflow-hidden bg-zinc-400">
                          <img src={users.userPic} className='w-6 h-6 rounded-full object-cover' />
                        </div>
                        <div className="user-name">{users.name}</div>
                      </div>
                    ))
                  }
                </div>
                {visibleUsers.length > 0 && <div className="line"></div>}
                <div className="message-bottom-container w-full">
                  <div className="inner-container w-full flex items-center justify-between gap-4">
                    <div className="user-changer rounded-full w-8 h-8 flex items-center justify-center overflow-hidden bg-zinc-400" onClick={toggleUserVisibility}>
                      <img src={user.userPic} className='w-6 h-6 rounded-full object-cover' />
                    </div>
                    <div className="message-input">
                      <input type="text" name="" id="quick-message-inp" className='w-[10rem] outline-0' placeholder='Quick message' />
                    </div>
                    <div className="message-send-btn flex items-center">
                      <button className=''>
                        <img width="30px" height="30px" src="https://img.icons8.com/material-rounded/24/sent.png" alt="sent" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Nav currentPage="home" navVisibility={false} user={user} />
    </div>
  );
}

export default Home;
