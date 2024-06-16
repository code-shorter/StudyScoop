import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import LoadingBar from '../components/LoadingBar';
import AlertBox from '../components/AlertBox';
import HomeBox from '../components/HomeBox';
import '../styles/Style.css';
import { loggedInUser, quickUser } from '../ComponentApi';

function Home() {
  const user = loggedInUser;
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [containerHeight, setContainerHeight] = useState('0px');

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

  return (
    <>
      <LoadingBar />
      <AlertBox props={{ status: 'showAlert', message: 'Hello Scoopers!' }} />
      <Header />
      <main>
        <div className="w-full px-5 py-7">
          <div className="top-cover w-full flex justify-center gap-4 ">
            <div className="left-cover flex flex-col gap-4">
              <div className="preview-flicks-container gradient-box min-w-[130px] min-h-[300px] rounded-2xl bg-[#EC7063] flex flex-col justify-between">
                <div className="font-[aBeeZee] w-full text-center text-white py-1 text-md">Get Motivate</div>
                <div className="font-[aBeeZee] w-full text-white p-2 text-[12px] flex justify-between">
                  <span>@user_123</span>
                  <span>1.3M</span>
                </div>
              </div>
              <div className="send-post min-w-[130px] bg-white flex flex-col justify-center items-center shadow-[0_0_10px_0px_#00000052] p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
                </svg>
                <p className="font-[aBeeZee] text-md">New Post</p>
              </div>
            </div>
            <div className="right-cover flex flex-col gap-4">
              <HomeBox props={{ title: 'Your Library', img: '' }} />
              <HomeBox props={{ title: 'Explore Posts', img: '' }} />
            </div>
          </div>
          <div className="bottom-cover">
            <div className="w-full px-5 fixed bottom-16 left-1/2 -translate-x-1/2">
              <div className={`quick-message-container w-full flex flex-col justify-between items-center bg-white shadow-[0_0_10px_0px_#00000052] rounded-xl p-3`}>
                <div className="message-user-container w-full" style={{ height: containerHeight, overflowY: visibleUsers.length > 4 ? 'scroll' : 'hidden', transition: 'height 0.3s ease' }}>
                  {
                    visibleUsers.map((users, index) => (
                      <div key={index} className="quick-message-user bg-white flex gap-4 w-full p-2 px-4 hover:bg-zinc-300 items-center">
                        <div className="user-changer rounded-full w-8 h-8 flex items-center justify-center overflow-hidden bg-zinc-400">
                          <img src={users.userPic} className='w-6 h-6 rounded-full object-cover' />
                        </div>
                        <div className="user-name">{users.name}</div>
                      </div>
                    ))
                  }
                </div>
                {visibleUsers.length > 0 && <div className="line"></div>}
                <div className="message-bottom-container">
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
      <Nav currentPage="home" user={user} />
    </>
  );
}

export default Home;
