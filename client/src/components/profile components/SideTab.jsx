import React, { useEffect, useState } from 'react';
import { loggedInUser } from '../../ComponentApi';
import gsap from 'gsap';
import '../../styles/profile.css';

function SideTab() {
    const user = loggedInUser;
    const editInpClass = 'w-full outline-0 py-1 px-2 bg-zinc-100 rounded-md';

    useEffect(() => {
        const editInp = document.querySelectorAll('.edit-inp');
        const inpLine = document.querySelectorAll('.inp-line');
        const exceedMsg = document.querySelectorAll('.exceed-msg');
    
        const handleFocus = (index, input) => {
            gsap.to(inpLine[index], {
                width: '100%',
                duration: 0.5,
            });
            gsap.to(input, {
                borderRadius: '0px',
                duration: 0.5,
            });
        };
    
        const handleBlur = (index, input) => {
            gsap.to(inpLine[index], {
                width: '0%',
                duration: 0.5,
            });
            gsap.to(input, {
                borderRadius: '0.375rem',
                duration: 0.5,
            });
        };
    
        const handleInput = (index, input) => {
            if (input.value.length > 20 && input.id === 'fullname-inp') {
                exceedMsg[index].className = 'exceed-msg';
            } else if (input.value.length > 20 && input.id === 'username-inp') {
                exceedMsg[index].className = 'exceed-msg';
            } else if (input.value.length > 120 && input.id === 'about-inp') {
                exceedMsg[index].className = 'exceed-msg';
            } else {
                exceedMsg.forEach(msg => {
                    msg.className = 'hidden';
                });
            }
        };
    
        editInp.forEach((input, index) => {
            const onFocus = () => handleFocus(index, input);
            const onBlur = () => handleBlur(index, input);
            const onInput = () => handleInput(index, input);
    
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);
            input.addEventListener('input', onInput);
    
            // Save references to the handlers for removal later
            input._onFocus = onFocus;
            input._onBlur = onBlur;
            input._onInput = onInput;
        });
    
        return () => {
            editInp.forEach((input, index) => {
                input.removeEventListener('focus', input._onFocus);
                input.removeEventListener('blur', input._onBlur);
                input.removeEventListener('input', input._onInput);
            });
        };
    }, []);
    
    useEffect(() => {
        const openPicPortal = document.querySelector('.open-pic-portal');
        const fileInput = document.getElementById('new-pic-inp');

        const handleClick = () => {
            fileInput.click();
        };

        openPicPortal.addEventListener('click', handleClick);

        return () => {
            openPicPortal.removeEventListener('click', handleClick);
        };
    }, []);


  return (
    <>
            <div className="edit-profile-tab fixed right-0 top-0 lg:right-3 lg:top-3 lg:rounded-xl hidden h-screen lg:h-0 bg-white shadow-xl">
                <div className="header w-full px-3 py-3 flex border-b-2 border-zinc-200 items-center lg:relative">
                    <div className="close-edit-profile-tab w-full flex gap-2 items-center justify-start lg:justify-between cursor-pointer">
                        <span className="lg:hidden">
                            <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/back.png" alt="back" />
                        </span>
                        <span className='text-lg'>Edit profile</span>
                        <div className="close p-1 active:bg-zinc-300 rounded-full duration-200 hidden lg:block cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>
                    </div>
                </div>
                <form action="" id='profile-edit-form'>
                    <div className="edit-userPic">
                        <input type="file" name="newUserPic" id="new-pic-inp" className='hidden' />
                        <div className="old-pic-preview w-full flex items-center justify-center my-4">
                            <div className="old-pic-inner duration-200 relative">
                                <img src={user.userPic} alt={user.username} className="user-pic object-cover duration-200 w-[140px] h-[140px] rounded-full cursor-pointer" />
                                <div className="camera-icon open-pic-portal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none">
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff">
                                        <path d="M440-438ZM106.67-120q-27 0-46.84-19.83Q40-159.67 40-186.67v-502q0-26.33 19.83-46.5 19.84-20.16 46.84-20.16h140L320-840h262.67v66.67H350.33l-73 84.66H106.67v502h666.66v-396H840v396q0 27-20.17 46.84Q799.67-120 773.33-120H106.67Zm666.66-569.33v-84h-84V-840h84v-84.67H840V-840h84.67v66.67H840v84h-66.67ZM439.67-264.67q73.33 0 123.5-50.16 50.16-50.17 50.16-123.5 0-73.34-50.16-123.17-50.17-49.83-123.5-49.83-73.34 0-123.17 49.83t-49.83 123.17q0 73.33 49.83 123.5 49.83 50.16 123.17 50.16Zm0-66.66q-45.67 0-76-30.67-30.34-30.67-30.34-76.33 0-45.67 30.34-76 30.33-30.34 76-30.34 45.66 0 76.33 30.34 30.67 30.33 30.67 76 0 45.66-30.67 76.33t-76.33 30.67Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-detail p-4 flex flex-col gap-4 w-full">
                        <div className="inp-cover relative">
                            <input type="text" name="fullname" id="fullname-inp" placeholder="Name" className={`edit-inp ${editInpClass}`} />
                            <div className="inp-line absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-500"></div>
                            <div className="exceed-msg hidden">Name must be less than 20 chars.</div>
                        </div>
                        <div className="inp-cover relative">
                            <input type="text" name="username" id="username-inp" placeholder="Username" className={`edit-inp ${editInpClass}`} />
                            <div className="inp-line absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-500"></div>
                            <div className="exceed-msg hidden">username must be less than 20 chars.</div>
                        </div>
                        <div className="inp-cover relative">
                            <textarea name="about" id="about-inp" placeholder="About" className={`edit-inp p-0 ${editInpClass}`}></textarea>
                            <div className="inp-line absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-500"></div>
                            <div className="exceed-msg hidden">about must be less than 120 chars.</div>
                        </div>
                    </div>
                </form>         
            </div>
            <div className="side-bar fixed right-0 top-0 lg:right-3 lg:top-3 lg:rounded-xl hidden h-screen lg:h-[] bg-white shadow-xl">
                <div className="header w-full px-3 py-3 flex justify-start lg:justify-end max-lg:border-b-2 max-lg:border-zinc-200 items-center">
                    <div className="close-sidebar flex gap-2 items-center cursor-pointer">
                        <span className="lg:hidden">
                            <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/back.png" alt="back" />
                        </span>
                        <div className="close hidden lg:block p-1 active:bg-zinc-300 rounded-full duration-200 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>
                        <span className='text-lg lg:hidden'>More</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SideTab