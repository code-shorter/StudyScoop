import React, { useEffect, useState } from 'react';
import { loggedInUser } from '../ComponentApi';
import Nav from '../components/Nav';
import LoadingBar from '../components/LoadingBar';
import AlertBox from '../components/AlertBox';
import PopupBtn from '../components/PopupBtn';
import SideTab from '../components/profile components/SideTab.jsx';
import '../javascript/profile.js'; 
import '../styles/Style.css';
import '../styles/profile.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ProfileDetail from '../components/profile components/ProfileDetail.jsx';
import PostGallery from '../components/profile components/PostGallery.jsx';

function Profile() {
    const user = loggedInUser;
    const linkTitle = 'Website';
    const popupInner = [
        {
            head: 'About',
            reason: `This is my study account on StudyScoop.
            And I'm also it's developer😍😍🥰🤗👍🏻`
        },
        {
            head: linkTitle,
            reason: 'My Website:',
            link: 'https://youtube.com'
        }
    ];
    const linkVisible = true;

    const [popupContent, setPopupContent] = useState({ head: '', reason: '', link: '' });
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    useEffect(() => {
        const popupCloseBtn = document.querySelector('.close-popup');
        const popupBoxCover = document.querySelector('#popup-box-cover');
        const previewCover = document.querySelector('#preview-cover');
        const openPreviewElements = document.querySelectorAll('.open-preview');
        const navBarBtn = document.querySelector('.nav-bar');
        const sideBar = document.querySelector('.side-bar');
        const closeSidebar = document.querySelector('.close-sidebar');
        const editProfileTab = document.querySelector('.edit-profile-tab');
        const editProfile = document.querySelector('.edit-profile');
        const closeEditProfileTab = document.querySelector('.close-edit-profile-tab');
        
        const closePopup = () => {
            gsap.to(popupBoxCover, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setIsPopupVisible(false);
                }
            });
        };
    
        const closePreview = () => {
            gsap.to(previewCover, {
                opacity: 0,
                duration: 0.5,
                display: 'none',
            });
        };
    
        const openPreviewHandler = () => {
            openPreviewElements.forEach(element => {
                let pressTimer;
                element.addEventListener('touchstart', function (e) {
                    pressTimer = window.setTimeout(function () {
                        openPreviewAction();
                    }, 1000);
                });
    
                element.addEventListener('touchend', function (e) {
                    clearTimeout(pressTimer);
                });
    
                let clickCount = 0;
                element.addEventListener('click', function () {
                    clickCount++;
                    if (clickCount === 2) {
                        openPreviewAction();
                        clickCount = 0;
                    }
                    setTimeout(function () {
                        clickCount = 0;
                    }, 400);
                });
            });
        };
    
        const openPreviewAction = () => {
            gsap.to(previewCover, {
                opacity: 1,
                duration: 0.5,
                display: 'flex',
            });
        };
        
        openPreviewHandler();
        previewCover.addEventListener('click', closePreview);
        popupCloseBtn?.addEventListener('click', closePopup);
    
        const openSidebarDesktop = () => {
            gsap.to(sideBar, {
                width: 400,
                height: 600,
                duration: 0.3,
                display: 'block',
            });
        };
    
        const closeSidebarDesktop = () => {
            gsap.to(sideBar, {
                width: 0,
                height: 0,
                duration: 0.3,
                display: 'none',
            });
        };
    
        const openSidebarMobile = () => {
            gsap.to(sideBar, {
                width: '100%',
                duration: 0.3,
                display: 'block',
            });
        };
    
        const closeSidebarMobile = () => {
            gsap.to(sideBar, {
                width: '0%',
                duration: 0.3,
                display: 'none',
            });
        };
    
        const openEditProfileDesktop = () => {
            gsap.to(editProfileTab, {
                width: 400,
                height: 600,
                duration: 0.3,
                display: 'block',
            });
        };
    
        const closeEditProfileDesktop = () => {
            gsap.to(editProfileTab, {
                width: 0,
                height: 0,
                duration: 0.3,
                display: 'none',
            });
        };
    
        const openEditProfileMobile = () => {
            gsap.to(editProfileTab, {
                width: '100%',
                duration: 0.3,
                display: 'block',
            });
        };
    
        const closeEditProfileMobile = () => {
            gsap.to(editProfileTab, {
                width: '0%',
                duration: 0.3,
                display: 'none',
            });
        };
    
        if (window.screen.width >= 1024) {
            navBarBtn?.addEventListener('click', openSidebarDesktop);
            closeSidebar?.addEventListener('click', closeSidebarDesktop);
        } else {
            navBarBtn?.addEventListener('click', openSidebarMobile);
            closeSidebar?.addEventListener('click', closeSidebarMobile);
        }
        if (window.screen.width >= 1024) {
            editProfile?.addEventListener('click', openEditProfileDesktop);
            closeEditProfileTab?.addEventListener('click', closeEditProfileDesktop);
        } else {
            editProfile?.addEventListener('click', openEditProfileMobile);
            closeEditProfileTab?.addEventListener('click', closeEditProfileMobile);
        }
    
        return () => {
            if (window.screen.width >= 1024) {
                navBarBtn?.removeEventListener('click', openSidebarDesktop);
                closeSidebar?.removeEventListener('click', closeSidebarDesktop);
                popupCloseBtn?.removeEventListener('click', closePopup);
            } else {
                navBarBtn?.removeEventListener('click', openSidebarMobile);
                closeSidebar?.removeEventListener('click', closeSidebarMobile);
                popupCloseBtn?.removeEventListener('click', closePopup);
            }
            if (window.screen.width >= 1024) {
                editProfile?.removeEventListener('click', openEditProfileDesktop);
                closeEditProfileTab?.removeEventListener('click', closeEditProfileDesktop);   
                popupCloseBtn?.removeEventListener('click', closePopup); 
            } else {
                editProfile?.removeEventListener('click', openEditProfileMobile);
                closeEditProfileTab?.removeEventListener('click', closeEditProfileMobile);  
                popupCloseBtn?.removeEventListener('click', closePopup);  
            }
        };
    }, [isPopupVisible]);
    
    const popupAppear = (btn) => {
        let content;
        if (btn === 'about') {
            content = popupInner[0];
        } else if (btn === 'link') {
            content = popupInner[1];
        }
        setPopupContent(content);
        setIsPopupVisible(true);
        gsap.from('#popup-box-cover', {
            opacity: 0,
            duration: 0.5
        });
    };
        
    function formatUrl(url) {
        let formattedUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
        let securityStatus = url.startsWith('https://') ? 'Secure' : 'Unsecure';
        return { formattedUrl, securityStatus };
    };

    return (
        <div className='main-container'>
            <LoadingBar />
            <AlertBox props={{ status: 'showAlert', message: 'Hello Scoopers!' }} />
            <div className="left-nav-bracket bg-white"></div>
            <div className="nav-container bg-white">
                <div className="desktop-nav-content">
                    <Link to='/home'><div className="platform-name hidden lg:block font-[amaranth] text-3xl p-2 cursor-pointer text-center" title='Home'>StudyScoop</div></Link>
                    <Nav currentPage="profile" user={loggedInUser} />
                </div>
                <Link to='/setting' className=''>
                    <div className="nav-setting hidden lg:flex gap-4 my-4 pt-4 border-t-2 border-black" title='Setting'>
                        <div className="nav-setting-icon ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                        </div>
                        <div className="nav-title">Setting</div>
                    </div>
                </Link>
            </div>
            <div className="side-tab">
                <SideTab />
            </div>
            <main className=''>
                <div className="profile-main-container">
                    <div className="header w-full px-3 py-3 flex justify-between border-b-2 border-zinc-200 items-center lg:justify-end">
                        <div className="flex gap-2 items-center lg:hidden cursor-pointer">
                            <span className="back">
                                <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/back.png" alt="back" />
                            </span>
                            <span className='text-lg'>Profile</span>
                        </div>
                        <div className="right-elem flex gap-4 items-center">
                            <span className="edit-profile cursor-pointer" title='Edit profile'>
                                <img width="20" height="20" src="https://img.icons8.com/material/24/create-new--v1.png" alt="create-new--v1" />
                            </span>
                            <span className="nav-bar cursor-pointer" title='More'>
                                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" />
                            </span>
                        </div>
                    </div>
                    <div className="profile-detail-container sm:h-[100px] md:h-[120px] lg:h-[150px]">
                        <ProfileDetail />
                    </div>
                    <div className="grey-popup-btn w-full px-4 my-4 flex gap-2 md:w-[500px] justify-start">
                        <div onClick={() => popupAppear('about')} className='popup-open-btn w-full cursor-pointer select-none' title='About'>
                            <PopupBtn props={{ name: 'About', visible: true }} />
                        </div>
                        <div onClick={() => popupAppear('link')} className={linkVisible === true ? `popup-open-btn w-full cursor-pointer select-none` : 'hidden'} title={linkTitle}>
                            <PopupBtn props={{ name: linkTitle, visible: linkVisible }} />
                        </div>
                        {isPopupVisible && (
                            <div id='popup-box-cover' className="popup-box-cover w-full h-screen p-4 absolute top-0 left-0 z-[99] flex items-center justify-center bg-[#00000098] backdrop-blur-sm md:p-8">
                                <div className="popup-box p-4 bg-white rounded-3xl min-h-64 max-h-96 w-full relative lg:w-[524px]">
                                    <div className="close-popup absolute right-3 top-3 p-1 active:bg-zinc-300 rounded-full duration-200 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                                    </div>
                                    <div className="popup-inner">
                                        <div className="popup-heading text-xl mb-2 font-semibold bg-white">{popupContent.head}</div>
                                        <div className="reason-div">
                                            <p className="popup-reason text-balance">{popupContent.reason}</p>
                                            {popupContent.link ? (
                                                <a href={popupContent.link} target='_blank' rel="noopener noreferrer">
                                                    <span className="popup-reason text-balance font-medium cursor-pointer">
                                                    <img width="14" height="14" src="https://img.icons8.com/metro/26/link.png" className='inline mr-2' alt="link" title='External link'/>
                                                        {(() => {
                                                            const { formattedUrl, securityStatus } = formatUrl(popupContent.link);
                                                            return (
                                                                <div title={formattedUrl} className='inline'>
                                                                    {formattedUrl}
                                                                    <span className={`ml-2 py-[2px] px-2 rounded-[3px] text-[12px] cursor-help ${securityStatus === 'Secure' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`} title={securityStatus === 'Secure' ? 'Secure website (using HTTPS)' : 'Unsecure website (using HTTP)'}>
                                                                        {securityStatus}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })()}
                                                    </span>
                                                </a>
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={user.posts.length > 0 || user.flicks.length > 0 ? "post-detail flex justify-around items-center mt-6" : "hidden"}>
                        <div className="post-container flex flex-col items-center cursor-pointer" title='posts'>
                            <span className="post text-md text-zinc-600">{user.posts.length}K</span>
                            <span className="text-sm text-zinc-600">Posts</span>
                        </div>
                        <div className="post-container flex flex-col items-center cursor-pointer" title='posts'>
                            <span className="post text-md text-zinc-600">{user.likes}M</span>
                            <span className="text-sm text-zinc-600">Likes</span>
                        </div>
                        <div className="post-container flex flex-col items-center cursor-pointer" title='posts'>
                            <span className="post text-md text-zinc-600">{user.flicks.length}K</span>
                            <span className="text-sm text-zinc-600">Flicks</span>
                        </div>
                    </div>
                    <div className="post-gallery-container">
                        <PostGallery />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;
