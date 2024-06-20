import React, { useEffect } from 'react'
import { loggedInUser } from '../../ComponentApi'
import { Link } from 'react-router-dom'
import commentAnimation from '../../assets/comment-animation.gif'
import commentIcon from '../../assets/comment-50.png'

function PostPreviewA() {
    const user = loggedInUser;
    useEffect(()=>{
        const viewCommentBtn = document.getElementById('view-comment-btn');
        const commentIconsBtn = document.querySelector('.comment-icons');
        viewCommentBtn.addEventListener('mouseenter', () => {
            commentIconsBtn.src = commentAnimation;
        } );
        viewCommentBtn.addEventListener('mouseout', () => {
            commentIconsBtn.src = commentIcon;
        } );
    })
    return (
        <div className="post-preview-container w-full h-screen p-4 fixed top-0 left-0 z-[99] flex items-center justify-center bg-[#00000098] backdrop-blur-sm md:px-32 md:py-8 xl:px-96 lg:py-10">
            <div className="preview-box w-full h-full p-2 rounded-xl bg-white flex flex-col">
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
                        <div className="post-data text-[14px] text-zinc-500 whitespace-nowrap">{user.posts[0].data}</div>
                    </div>
                    <div className="close cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
                    </div>
                </div>
                <div className="img-preview-container flex-grow flex items-center justify-center overflow-hidden">
                    <img src={user.posts[0].img} alt={'@' + user.username} className='max-w-full max-h-full object-contain rounded-lg' />
                </div>
                <div className="bottom-container line-between border-t-2 mt-2 px-4 py-2">
                    <div className="img-title text-base font-[500] max-w-80">{user.posts[0].title}</div>
                    <div className="bottom-inner-container">
                        <div id='like-btn' title='Link' className="select-none duration-300 flex justify-center w-10 cursor-pointer"><img src={commentIcon} className="comment-icons w-6 h-6 mr-2" /><span>{user.posts[0].comments[0]}</span></div>
                        <div id='view-comment-btn' title='Comment' className="select-none duration-300 flex justify-center w-10 cursor-pointer"><img src={commentIcon} className="comment-icons w-6 h-6 mr-2" /><span>{user.posts[0].comments[0]}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPreviewA;
