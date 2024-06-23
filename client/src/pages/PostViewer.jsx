import React from 'react';
import { loggedInUser, post } from '../ComponentApi';
import commentAnimation from '../assets/comment-animation.gif';
import commentIcon from '../assets/comment-50.png';
import likeFilledIcon from '../assets/like-48-filled-icon.png';
import likeIconAnimation from '../assets/like-48-icon-gif.gif';
import likeIcon from '../assets/like-48-icon.png';
import saveIcon from '../assets/bookmark-48.png';
import saveFilledIcon from '../assets/bookmark-filled-48.png';
import gsap from 'gsap';


const PostViewer = () => {
    const user = loggedInUser;
    const DyncSaveIcon = ''
    return (
        <>
            <div className="header w-full px-3 py-3 flex border-b-2 border-zinc-200 items-center lg:relative">
                <div className="close-edit-profile-tab w-full flex gap-2 items-center justify-start lg:justify-between cursor-pointer">
                    <span className="lg:hidden">
                        <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/back.png" alt="back" />
                    </span>
                    <span className='text-lg select-none font-[400]'>User post</span>
                    <div className="close">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                    </div>
                </div>
            </div>

            <div class="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                <div class="flex items-center justify-between p-4">
                    <div className="user-detail-l flex gap-2 items-center">
                        <img class="h-8 w-8 rounded-full" src="https://placehold.co/32x32" alt="profile picture" />
                        <span class="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{user.name}</span>
                    </div>
                    <svg class="h-6 w-6 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 2a5 5 0 00-5 5v4h10v-4a5 5 0 00-5-5zm-7 9v-4a7 7 0 0114 0v4H5z" />
                    </svg>
                </div>
                <div class="w-full min-h-96 bg-zinc-200 dark:bg-zinc-700">
                    <img class="w-full h-full object-cover" src="https://placehold.co/500x500" alt="post image" />
                </div>
                <div class="post-title-container px-4 py-2">
                    <p class="post-title text-base font-[500] text-zinc-800 dark:text-zinc-200">cdvdfcds</p>
                </div>
                <div class="reaction-container flex items-center justify-between p-4">
                    <div class="flex space-x-4">
                        <div className="like-icon-container">
                        <img src={likeIcon} className="like-icons w-6 h-6 mr-1" />
                        <span className="like-count">1.2K Likes</span>
                        </div>
                        <img src={saveIcon} className="save-icons w-6 h-6 mr-1" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default PostViewer;
