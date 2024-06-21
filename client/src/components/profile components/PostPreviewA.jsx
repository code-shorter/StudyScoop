import React, { useEffect, useState } from 'react';
import { comment, loggedInUser, post } from '../../ComponentApi';
import { HashRouter, Link } from 'react-router-dom';
import commentAnimation from '../../assets/comment-animation.gif';
import commentIcon from '../../assets/comment-50.png';
import likeFilledIcon from '../../assets/like-48-filled-icon.png';
import likeIconAnimation from '../../assets/like-48-icon-gif.gif';
import likeIcon from '../../assets/like-48-icon.png';

// Simulate API call to update likes in backend
const updateLikeInBackend = async (postId, userId) => {
    // Replace this with actual API call
    // e.g., await fetch(`/api/posts/${postId}/like`, { method: 'POST', body: JSON.stringify({ userId }) });
    return new Promise((resolve) => setTimeout(resolve, 500));
};

function PostPreviewA() {
    const user = loggedInUser;
    const [like, setLike] = useState(post.likes);
    const [hasLiked, setHasLiked] = useState(post.likedBy.includes(user.id));
    const [likes, setLikes] = useState(post.comments.map(comment => comment.likeCount));


    const handleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index]++;
        setLikes(newLikes);
        // Call API to update the like count in the backend.
        // fetch('/api/update-like', { method: 'POST', body: JSON.stringify({ commentId: post.comments[index].id, likeCount: newLikes[index] }) });
    };
    
    useEffect(() => {
        const viewCommentBtn = document.getElementById('view-comment-btn');
        const commentIconsBtn = document.querySelector('.comment-icons');
        const likeBtn = document.getElementById('like-btn');
        const likeIconsBtn = document.querySelector('.like-icons');
        const imgTitle = document.querySelector('.img-title');

        const overTextHandler = () => {
            imgTitle.textContent[33].replace(imgTitle.textContent[33], '.');
            imgTitle.textContent[34].replace(imgTitle.textContent[34], '.');
            imgTitle.textContent[35].replace(imgTitle.textContent[35], '.');
        }

        if (imgTitle.textContent.length > 35) {
            overTextHandler();
        }

        const handleMouseEnterComment = () => {
            commentIconsBtn.src = commentAnimation;
        };
        const handleMouseOutComment = () => {
            commentIconsBtn.src = commentIcon;
        };
        const handleMouseEnterLike = () => {
            likeIconsBtn.src = likeIconAnimation;
        };
        const handleLikeClick = async () => {
            if (!hasLiked) {
                setLike(like + 1);
                setHasLiked(true);
                likeIconsBtn.src = likeFilledIcon;
                likeBtn.addEventListener('mouseenter', () => {
                    likeIconsBtn.src = likeFilledIcon;
                });
                likeBtn.addEventListener('mouseout', handleMouseOutComment);

                try {
                    await updateLikeInBackend(post.id, user.id);
                } catch (error) {
                    console.error("Failed to update like in backend", error);
                }
            }
        };

        viewCommentBtn.addEventListener('mouseenter', handleMouseEnterComment);
        viewCommentBtn.addEventListener('mouseout', handleMouseOutComment);
        likeBtn.addEventListener('click', handleLikeClick);

        // Cleanup event listeners on component unmount
        return () => {
            viewCommentBtn.removeEventListener('mouseenter', handleMouseEnterComment);
            viewCommentBtn.removeEventListener('mouseout', handleMouseOutComment);
            likeBtn.removeEventListener('mouseenter', handleMouseEnterLike);
            likeBtn.removeEventListener('click', handleLikeClick);
        };
    }, [hasLiked, like]);

    return (
        <div className="post-preview-container w-full h-screen p-4 fixed top-0 left-0 z-[99] flex items-center justify-center bg-[#00000098] backdrop-blur-sm md:px-32 md:py-8 xl:px-96 lg:py-10">
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
                        <div className="post-data text-[14px] text-zinc-500 whitespace-nowrap">{post.date}</div>
                    </div>
                    <div className="close cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                    </div>
                </div>
                <div className="img-preview-container flex-grow flex items-center justify-center overflow-hidden">
                    <img src={post.img} alt={'@' + user.username} className='max-w-full max-h-full object-contain rounded-lg' />
                </div>
                <div className="bottom-container line-between border-t-2 mt-2 px-4 py-2">
                    <div className="img-title text-base font-[500]">{post.title}</div>
                    <div className="bottom-inner-container flex gap-8">
                        <div id='like-btn' title='Like' className="select-none duration-300 flex justify-center w-10 cursor-pointer">
                            <img src={likeIcon} className="like-icons w-6 h-6 mr-1" />
                            <span>{like}</span>
                        </div>
                        <div id='view-comment-btn' title='Comment' className="select-none duration-300 flex justify-center w-10 cursor-pointer">
                            <img src={commentIcon} className="comment-icons w-6 h-6 mr-1" />
                            <span>{post.comments.length}</span>
                        </div>
                    </div>
                </div>
                <div className="side-popup-box w-64 h-64 bg-white absolute bottom-0 left-0 rounded-xl">
                    <div className="spb-header line-between">
                        <span className='text-[17px] font-[500] p-2'>Title</span>
                        <div className="close cursor-pointer mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>
                    </div>
                    <div className="spb-content px-2">
                        {/* <div className="spb-content-type-title">{post.title}</div> */}
                        <div className="spb-content-type-comment h-52 overflow-y-scroll">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="comment-container mb-4">
                                    <div className="comment-detail flex items-center justify-start gap-2 mb-2">
                                        <Link to={'/profile/' + comment.userId} className=' flex items-center justify-start gap-2 mb-2'>
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
                                                <span className='text-[12px]'>{likes[index]}</span>
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
