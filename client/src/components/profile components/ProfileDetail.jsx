import React from 'react'
import { loggedInUser } from '../../ComponentApi';


function ProfileDetail() {
    const user = loggedInUser;
    return (
        <>
            <div className="profile-detail flex gap-2 md:gap-4 mt-4 px-5 items-center">
                <div className="profile-pic-container open-preview rounded-full w-[120px] md:w-[150px] overflow-hidden">
                    <img src={user.userPic} alt={user.username} className='open-preview w-full h-full object-cover' />
                </div>
                <div className="user-pic-preview">
                    <div id='preview-cover' className="preview-cover w-full h-screen p-4 absolute top-0 left-0 z-[99] hidden items-center justify-center bg-[#00000098] backdrop-blur-sm md:p-8">
                        <div id="img-preview">
                            <img src={user.userPic} alt={user.username} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full' />
                        </div>
                    </div>
                </div>
                <div className="detail-left-container w-full py-1">
                    <div className="name-detail flex flex-col">
                        <div className="name-cover flex gap-3 items-center">
                            <span className="name text-lg md:text-2xl leading-5" title='name'>{user.name}</span>
                            {user.followers >= 5000 ?
                                <span className="user-verified" title='verified'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0084FF"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                                </span> :
                                <span className="user-unverified"></span>
                            }
                        </div>
                        <span className="username text-sm md:text-base text-zinc-600 leading-6" title='username'>@{user.username}</span>
                    </div>
                    <div className="followers-detail w-full min-[425px]:w-[230px] flex mt-2 justify-between items-center">
                        <div className="follower-container flex flex-col items-center text-[12px] leading-3 lg:text-[13px] cursor-pointer select-none hover:bg-zinc-100 duration-300 p-1 rounded-md" title='followers'>
                            <span className="followers text-zinc-600">{user.followers}M</span>
                            <span className="text-zinc-600">followers</span>
                        </div>
                        <div className="following-container flex flex-col items-center text-[12px] leading-3 lg:text-[13px] cursor-pointer select-none hover:bg-zinc-100 duration-300 p-1 rounded-md" title='following'>
                            <span className="followers text-zinc-600">{user.following}</span>
                            <span className="text-zinc-600">following</span>
                        </div>
                        <div className="followed-stream-container" title='stream'>
                            <div className="zinc-cover py-[2px] px-[5px] text-[12px] bg-zinc-200 rounded-sm font-semibold lg:text-[13px] cursor-pointer select-none">{user.stream}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileDetail