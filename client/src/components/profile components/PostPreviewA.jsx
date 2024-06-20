import React from 'react'
import { loggedInUser } from '../../ComponentApi'
import { Link } from 'react-router-dom'

function PostPreviewA() {
    const user = loggedInUser
    return (
        <>
            <div className="post-preview-container w-full h-screen p-4 fixed top-0 left-0 z-[99] flex items-center justify-center bg-[#00000098] backdrop-blur-sm md:px-32 md:py-8 xl:px-96 lg:py-10">
                <div className="preview-box w-full h-full p-2 rounded-xl bg-white">
                    <div className="post-user-detail-cover line-between">
                        <Link to={`/profile`}>
                            <div className="post-user-detail p-2 flex gap-2 items-center">
                                <img src={user.userPic} alt={user.username} className='w-10 h-10 object-cover rounded-full' />
                                <div className="name-box">
                                    <div className="post-user-name text-sm md:text-[16px] font-[500]">{user.name}</div>
                                    <div className="post-username text-sm md:text-[12px] text-zinc-500 font-[400]">@{user.username}</div>
                                </div>
                                <span className='point-gap'>•</span>
                                <div className="post-data text-[14px] text-zinc-500 whitespace-nowrap">{user.posts[0].data}</div>
                            </div>
                        </Link>
                        <div className="close mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>

                    </div>
                    <div className="img-preview-container py-2 px-24">
                        <img src={user.posts[0].img} alt={'@' + user.username} className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPreviewA