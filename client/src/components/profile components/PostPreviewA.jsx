import React, { useEffect, useState } from 'react';
import { loggedInUser, post } from '../../ComponentApi';
import { Link } from 'react-router-dom';
import commentAnimation from '../../assets/comment-animation.gif';
import commentIcon from '../../assets/comment-50.png';
import likeFilledIcon from '../../assets/like-48-filled-icon.png';
import likeIconAnimation from '../../assets/like-48-icon-gif.gif';
import likeIcon from '../../assets/like-48-icon.png';
import gsap from 'gsap';

const updateLikeInBackend = async (postId, userId) => {
    return new Promise((resolve) => setTimeout(resolve, 500));
};


function PostPreviewA({ postDetail, previewVisible, onClose }) {
    const user = loggedInUser;
    const [likes, setLikes] = useState(postDetail.likes);
    const [hasLiked, setHasLiked] = useState(postDetail.likedBy.includes(user.username));
    const [likeCounts, setLikeCounts] = useState(postDetail.comments.map(comment => comment.likeCount));


    useEffect(() => {
        const postPreviewClose = document.querySelector('.post-preview-close');
        document.title = `${postDetail.title} by @${user.username} - StudyScoop`;
        postPreviewClose.addEventListener('click', () => {
            document.title = `@${user.username} - StudyScoop`;
        })
      }, [])

    const handleLike = async (index) => {
        if (!hasLiked) {
            setLikes(likes + 1);
            setHasLiked(true);
            try {
                await updateLikeInBackend(postDetail.postId, user.username);
            } catch (error) {
                console.error("Failed to update like in backend", error);
            }
        }
    };

    useEffect(() => {
        const postPreviewContainer = document.querySelector('.post-preview-container');

        const openPostPreview = () => {
            gsap.to(postPreviewContainer, {
                opacity: '100%',
                display: 'flex',
                duration: 0.3
            });
        };

        const closePostPreview = () => {
            gsap.to(postPreviewContainer, {
                opacity: '0%',
                display: 'none',
                duration: 0.3
            });
        };

        if (previewVisible) {
            openPostPreview();
        } else {
            closePostPreview();
        }

        const handleMouseEnterComment = () => {
            document.querySelector('.comment-icons').src = commentAnimation;
        };

        const handleMouseOutComment = () => {
            document.querySelector('.comment-icons').src = commentIcon;
        };

        const handleMouseEnterLike = () => {
            document.querySelector('.like-icons').src = likeIconAnimation;
        };

        const handleMouseOutLike = () => {
            document.querySelector('.like-icons').src = likeIcon;
        };

        const viewCommentBtn = document.getElementById('view-comment-btn');
        const likeBtn = document.getElementById('like-btn');
        const closeSPBPopup = document.querySelectorAll('.spb-close');
        const imgTitle = document.querySelector('.img-title');
        const sidePopupBox = document.querySelectorAll('.side-popup-box');

        const openSidePopupBox = (popupNo) => {
            if (popupNo === 1) {
                gsap.to(sidePopupBox[0], {
                    display: 'block',
                    width: 256,
                    height: 256,
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(document.querySelector('.lspb-content'), {
                            opacity: '100%',
                            duration: 0.3
                        });
                    }
                });
            } else if (popupNo === 2) {
                gsap.to(sidePopupBox[1], {
                    display: 'block',
                    width: 256,
                    height: 256,
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(document.querySelector('.rspb-content'), {
                            opacity: '100%',
                            duration: 0.3
                        });
                    }
                });
            }
        };

        const closeSidePopupBox = () => {
            sidePopupBox.forEach((elem) => {
                gsap.to(elem, {
                    display: 'none',
                    width: 0,
                    height: 0,
                    duration: 0.3,
                    onStart: () => {
                        gsap.to(document.querySelectorAll('.spb-content'), {
                            opacity: '0%',
                            duration: 0.3
                        });
                    }
                });
            });
        };

        viewCommentBtn.addEventListener('mouseenter', handleMouseEnterComment);
        viewCommentBtn.addEventListener('mouseout', handleMouseOutComment);
        likeBtn.addEventListener('mouseenter', handleMouseEnterLike);
        likeBtn.addEventListener('mouseout', handleMouseOutLike);
        imgTitle.addEventListener('click', () => openSidePopupBox(1));
        viewCommentBtn.addEventListener('click', () => openSidePopupBox(2));
        closeSPBPopup.forEach((e) => { e.addEventListener('click', closeSidePopupBox); });

        return () => {
            viewCommentBtn.removeEventListener('mouseenter', handleMouseEnterComment);
            viewCommentBtn.removeEventListener('mouseout', handleMouseOutComment);
            likeBtn.removeEventListener('mouseenter', handleMouseEnterLike);
            likeBtn.removeEventListener('mouseout', handleMouseOutLike);
            imgTitle.removeEventListener('click', () => openSidePopupBox(1));
            viewCommentBtn.removeEventListener('click', () => openSidePopupBox(2));
        };
    }, [previewVisible]);

    if (!previewVisible) return null;

    return (
        <div className="post-preview-container w-full h-screen p-4 fixed top-0 left-0 z-[99] hidden items-center justify-center bg-[#00000098] backdrop-blur-sm md:px-32 md:py-8 xl:px-96 lg:py-10">
            <div className="preview-box w-full h-full p-2 rounded-xl bg-white flex flex-col relative">
                <div className="post-user-detail-cover flex justify-between items-center p-2 border-b-2 mb-2">
                    <div className="user-detail-inner-cover flex gap-2 items-center">
                        <Link to={`/profile`} className="flex items-center gap-2">
                            <img src={user.userPic} alt={user.username} className='w-10 h-10 object-cover rounded-full' />
                            <div className="name-box">
                                <div className="post-user-name text-sm md:text-[16px] font-[500]">{user.name}</div>
                                <div className="post-username text-sm md:text-[12px] text-zinc-500 font-[400]">@{user.username}</div>
                            </div>
                        </Link>
                        <span className="point-gap"></span>
                        <div className="post-data text-[14px] text-zinc-500 whitespace-nowrap">{postDetail.date}</div>
                    </div>
                    <div className="close post-preview-close cursor-pointer" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000">
                            <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                        </svg>
                    </div>
                </div>
                <div className="img-preview-container flex-grow flex items-center justify-center overflow-hidden">
                    <img src={postDetail.img} alt={'@' + user.username} className='max-w-full max-h-full object-contain rounded-lg' />
                </div>
                <div className="bottom-container line-between border-t-2 mt-2 px-4 py-2">
                    <div className="img-title text-base font-[500] cursor-pointer">{postDetail.title}</div>
                    <div className="bottom-inner-container flex gap-8">
                        <div id='like-btn' title='Like' className="select-none duration-300 flex justify-center w-10 cursor-pointer" onClick={() => handleLike()}>
                            <img src={likeIcon} className="like-icons w-6 h-6 mr-1" />
                            <span>{likes}</span>
                        </div>
                        <div id='view-comment-btn' title='Comment' className="select-none duration-300 flex justify-center w-10 cursor-pointer">
                            <img src={commentIcon} className="comment-icons w-6 h-6 mr-1" />
                            <span>{postDetail.comments.length}</span>
                        </div>
                    </div>
                </div>
                <div className="left-side-popup-box side-popup-box w-0 h-0 hidden bg-white absolute bottom-0 left-0 rounded-xl">
                    <div className="spb-header line-between">
                        <span className='text-[17px] font-[500] p-2'>Title</span>
                        <div className="close spb-close cursor-pointer mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000">
                                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="lspb-content spb-content px-2 opacity-0">
                        <div className="lspb-content-type-title">{postDetail.title}</div>
                    </div>
                </div>
                <div className="right-side-popup-box side-popup-box w-0 h-0 hidden bg-white absolute bottom-0 right-0 rounded-xl">
                    <div className="rspb-header line-between">
                        <span className='text-[17px] font-[500] p-2'>Comment</span>
                        <div className="close spb-close cursor-pointer mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000">
                                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="rspb-content spb-content opacity-0 px-2">
                        <div className="rspb-content-type-comment h-52 overflow-y-scroll">
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
                </div>
            </div>
        </div>
    );
}

export default PostPreviewA;
