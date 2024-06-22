import React from 'react';
import { loggedInUser } from '../ComponentApi';

const PostViewer = () => {
    const user = loggedInUser;
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
                <div class="w-full h-full bg-zinc-200 dark:bg-zinc-700">
                    <img class="w-full h-full object-cover" src="https://placehold.co/500x500" alt="post image" />
                </div>
                <div class="flex items-center justify-between p-4">
                    <div class="flex space-x-4">
                        <svg class="h-6 w-6 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <svg class="h-6 w-6 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 15.46l-5.27-2.76a1 1 0 00-.92 0L9.54 15.46a1 1 0 00-.54.88v3.12a1 1 0 00.54.88l5.27 2.76a1 1 0 00.92 0l5.27-2.76a1 1 0 00.54-.88v-3.12a1 1 0 00-.54-.88zM12 17.27l-4.15-2.18L12 12.91l4.15 2.18L12 17.27zM12 10.91L7.85 8.73 12 6.55l4.15 2.18L12 10.91z" />
                        </svg>
                        <svg class="h-6 w-6 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 15.46l-5.27-2.76a1 1 0 00-.92 0L9.54 15.46a1 1 0 00-.54.88v3.12a1 1 0 00.54.88l5.27 2.76a1 1 0 00.92 0l5.27-2.76a1 1 0 00.54-.88v-3.12a1 1 0 00-.54-.88zM12 17.27l-4.15-2.18L12 12.91l4.15 2.18L12 17.27zM12 10.91L7.85 8.73 12 6.55l4.15 2.18L12 10.91z" />
                        </svg>
                    </div>
                    <svg class="h-6 w-6 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 2a5 5 0 00-5 5v4h10v-4a5 5 0 00-5-5zm-7 9v-4a7 7 0 0114 0v4H5z" />
                    </svg>
                </div>
                <div class="px-4 pb-4">
                    <p class="text-sm font-semibold text-zinc-800 dark:text-zinc-200">607 likes</p>
                    <p class="text-sm text-zinc-800 dark:text-zinc-200"><span class="font-semibold">sheryians_coding_school</span> Link is in Bio... <span class="text-zinc-500">more</span></p>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">View all 3 comments</p>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400">4 days ago</p>
                </div>
            </div>
        </>
    );
};

export default PostViewer;
