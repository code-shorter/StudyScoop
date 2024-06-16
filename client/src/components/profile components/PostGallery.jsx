import React from 'react'
import { loggedInUser } from '../../ComponentApi';


function PostGallery() {
    const user = loggedInUser;
    
    return (
        <>
            <div className="post-gallery">
                <div className="post-gallery-nav mt-4 py-1 border-y-2 border-zinc-400 flex items-center justify-around">
                    <div className="p-1 cursor-pointer">All</div>
                    <div className="p-1 cursor-pointer" id='post-grid'>
                        <img width="18" height="18" src="https://img.icons8.com/ios/50/health-data.png" alt="health-data" />
                    </div>
                    <div className="p-1 cursor-pointer" id='flick-grid'>
                        <img width="18" height="18" src="/src/assets/StudyFlicks_logo.jpg" alt="health-data" />
                    </div>
                </div>
                <div className="posts-preview mt-[2px] grid grid-cols-4 gap-[2px]">
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                    <div className="posts-box">
                        <img
                            src="https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg"
                            alt=""
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostGallery