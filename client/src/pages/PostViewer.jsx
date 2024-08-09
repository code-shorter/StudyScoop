import React, { useEffect, useState } from 'react';
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
import { Link, useLocation } from 'react-router-dom';


const PostViewer = ({ props }) => {
    const DyncSaveIcon = ''

    const location = useLocation();
    const history = window.history;
    const postDetail = location.state;
    const postUserDetail = users.find(u => u.username === postDetail.userId);

    const goBack = () => {
        history.back();
    };

    const handleAddComment = (comment) => { };
    const user = loggedInUser;
    const [likes, setLikes] = useState(postDetail.likes);
    const [hasLiked, setHasLiked] = useState(postDetail.likedBy.includes(user.username));
    const [likeCounts, setLikeCounts] = useState(postDetail.comments.map(comment => comment.likeCount));
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handleCommentOpen = () => {
        gsap.to('.comment-viewer', {
            height: 384,
            duration: 0.3,
            display: 'block',
        })
    }
    const handleCommentClose = () => {
        gsap.to('.comment-viewer', {
            height: 0,
            duration: 0.3,
            display: 'none',
        })
    }

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
                        {postDetail.img.length > 1 ?
                            postDetail.img.map((img, index) => (
                                <img className="w-full h-full object-cover snap-start" key={index} src={img} alt="post image" />
                            )) :
                            <img className="w-full h-full object-cover" src={postDetail.img[0]} alt="post image" />
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
                                <span className="material-symbols-outlined">share</span>
                                <span className="like-count text-[12px] font-[600]">{postDetail.likes} Shares</span>
                            </div>
                            <div className="like-icon-container flex gap-1 items-center flex-col">
                                <span className="material-symbols-outlined">sms</span>
                                <span className="like-count text-[12px] font-[600]">{postDetail.likes} msgs</span>
                            </div>
                            <div className="like-icon-container flex gap-1 items-center flex-col">
                                <img src={saveIcon} className="save-icons w-6 h-6" />
                            </div>
                        </div>
                        <div className="post-comment-container-div flex gap-1 items-center flex-col" onClick={handleCommentOpen}>
                            <img src={commentIcon} className="save-icons w-6 h-6" />
                            <span className="like-count text-[12px] font-[600]">{postDetail.comments.length}</span>
                        </div>
                        <div className="comment-viewer bg-white rounded-t-3xl shadow-lg fixed bottom-0 left-0 w-full h-0">
                            <div className="comment-expender w-full p-2 flex justify-center border-b-2 border-zinc-200" onClick={handleCommentClose}>
                                <div className="expender-bar bg-zinc-400 w-20 h-1 rounded-full"></div>
                            </div>
                            <div className="comment-inner rspb-content spb-content mt-3 px-2 ">
                                <div className="rspb-content-type-comment max-h-60 overflow-y-scroll">
                                    {postDetail.comments.map((comment, index) => (
                                        <div key={index} className="comment-container mb-4">
                                            <div className="comment-detail flex items-center justify-start gap-2 mb-2">
                                                <Link to={'/profile'} className=' flex items-center justify-start gap-2 mb-2'>
                                                    <img src={comment.userPic} className="user-pic w-6 h-6 aspect-square rounded-full object-cover" />
                                                    <div className="user-id font-medium text-[14px]">{comment.userId}</div>
                                                </Link>
                                                <span className="point-gap"></span>
                                                <div className="user-comment-date text-[13px] text-zinc-500 whitespace-nowrap">{comment.period}</div>
                                            </div>
                                            <div className="comment-text mb-2 text-[14px] cursor-pointer">{comment.userComment}</div>
                                            <div className="user-interaction-div flex justify-between">
                                                <div className="reply-btn text-blue-500 font-[500] text-[12px] ml-1 cursor-pointer">Reply</div>
                                                <div className="liked-comment-btn">
                                                    <div title='Like' className="select-none duration-300 flex justify-center w-10 cursor-pointer" onClick={() => handleLike(index)}>
                                                        <img src={likeIcon} className="like-icons w-4 h-4 mr-1" />
                                                        <span className='text-[12px]'>{likeCounts[index]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="add-comment-box bg-white w-full flex justify-between p-2 items-center">
                                <input type="text" className="add-comment-input w-full h-10 px-3 border-2 border-zinc-200 rounded-md focus:outline-none" placeholder="Write a comment..." />
                                <div className="add-comment-btn mx-5 flex items-center" onClick={handleAddComment}>
                                    <span className="material-symbols-outlined text-3xl">
                                        send
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Nav currentPage={null} user={loggedInUser} />
        </>
    );
};

export default PostViewer;
