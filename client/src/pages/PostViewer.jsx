import React from 'react';
import { loggedInUser, post, users } from '../ComponentApi';
import LoadingBar from '../components/LoadingBar';
import AlertBox from '../components/AlertBox';
import Nav from '../components/Nav';
import commentAnimation from '../assets/comment-animation.gif';
import commentIcon from '../assets/comment-50.png';
import likeFilledIcon from '../assets/like-48-filled-icon.png';
import likeIconAnimation from '../assets/like-48-icon-gif.gif';
import likeIcon from '../assets/like-48-icon.png';
import saveIcon from '../assets/bookmark-48.png';
import saveFilledIcon from '../assets/bookmark-filled-48.png';
import gsap from 'gsap';
// import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const PostViewer = ({props}) => {
    const DyncSaveIcon = ''

    const location = useLocation();
    const history = window.history;
    const postDetail = location.state;
    const postUserDetail = users.find(u => u.username === postDetail.userId);

    const goBack = () => {
        history.back();
    };

    return (
        <>
            <LoadingBar />
            <AlertBox props={{ status: 'showAlert', message: 'Hello Scoopers!' }} />
            <main className={window.screen.width >= 1024 ? window.history.back() : ''}>
                <div className="header w-full px-3 py-3 flex border-b-2 bg-white border-zinc-200 items-center sticky top-0 lg:relative">
                    <div className="close-edit-profile-tab w-full flex gap-2 items-center justify-start lg:justify-between cursor-pointer" onClick={goBack}>
                        <span className="lg:hidden">
                            <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/back.png" alt="back" />
                        </span>
                        <span className='text-lg select-none font-[400]'>User post</span>
                        <div className="close">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-white dark:bg-zinc-900 border-b-2 pb-2">
                    <div className="flex items-center justify-between p-3">
                        <div className="user-detail-l flex gap-2 items-center">
                            <img className="h-8 w-8 rounded-full" src={postUserDetail.userPic} alt="profile picture" />
                            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{postUserDetail.name}</span>
                            <span className="point-gap"></span>
                            <span className='up-date text-[12px] text-zinc-500 whitespace-nowrap'>7 days</span>
                        </div>
                        <div className="followed-stream-container" title='stream'>
                            <div className="zinc-cover py-[2px] px-[5px] text-[12px] bg-zinc-200 rounded-sm font-semibold lg:text-[13px] cursor-pointer select-none">{postUserDetail.stream}</div>
                        </div>
                    </div>
                    <div className={`post-pic w-full h-full bg-black dark:bg-black ${postDetail.img.length > 0 ? 'flex items-center gap-1 overflow-x-scroll snap-mandatory snap-x' : ''}`}>
                        { postDetail.img.length > 0 ?
                            postDetail.img.map((img, index) => (
                                <img className="w-full h-full object-cover snap-start" key={index} src={img} alt="post image" />
                            )) : 
                            <img className="w-full h-full object-cover" src={postDetail.img} alt="post image" />
                            }
                    </div>
                    <div className="post-title-container px-4 py-2">
                        <p className="post-title text-[15px] font-[700] text-zinc-800 dark:text-zinc-200">{postDetail.title}</p>
                    </div>
                    <div className="reaction-container flex items-center justify-between px-4 pt-2 pb-14">
                        <div className="flex gap-7">
                            <div className="like-icon-container flex gap-1 items-center flex-col">
                                <img src={likeIcon} className="like-icons w-6 h-6" />
                                <span className="like-count text-[12px] font-[600]">{postDetail.likes} Likes</span>
                            </div>
                            <div className="like-icon-container flex gap-1 items-center flex-col">
                                <img src={saveIcon} className="save-icons w-6 h-6" />
                            </div>
                        </div>
                        <div className="post-comment-container-div flex gap-1 items-center flex-col">
                            <img src={commentIcon} className="save-icons w-6 h-6" />
                            <span className="like-count text-[12px] font-[600]">{postDetail.comments.length}</span>
                        </div>
                    </div>
                </div>
            </main>
            <Nav currentPage={null} user={loggedInUser} />
        </>
    );
};

export default PostViewer;
