import React, { useEffect, useState } from 'react';
import { loggedInUser, post } from '../../ComponentApi';
import PostPreviewA from './PostPreviewA';
import { Navigate, useNavigate } from 'react-router-dom';

function PostGallery() {
    const user = loggedInUser;
    const [postPreviewProps, setPostPreviewProps] = useState(null);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const openPreview = (postID) => {
        const postDetail = post.find(p => p.postId === postID);
        if (postDetail) {
            if (window.screen.width >= 1024) {
                setPostPreviewProps(postDetail);
                setStatus(true);
            } else {
                navigate(`/post/${postID}`, { state: postDetail });
            }
        } else {
            console.error('Post not found');
        }
    };

    return (
        <>
            <div className="post-gallery">
                <div className="post-gallery-nav mt-4 py-1 border-y-2 border-zinc-400 flex items-center justify-around">
                    <div className="p-1 cursor-pointer">All</div>
                    <div className="p-1 cursor-pointer" id='post-grid'>
                        <img width="18" height="18" src="https://img.icons8.com/ios/50/health-data.png" alt="Post" />
                    </div>
                    <div className="p-1 cursor-pointer" id='flick-grid'>
                        <img width="18" height="18" src="/src/assets/StudyFlicks_logo.jpg" alt="Flicks" />
                    </div>
                </div>
                <div className="posts-preview mt-[2px] grid grid-cols-4 gap-[2px]">
                    {user.posts.map((post, index) => (
                        <div key={index} id={post.postId} className="posts-box cursor-pointer">
                            <img
                                src={post.img}
                                alt={'post#' + post.postId}
                                className="w-full h-full object-cover aspect-square"
                                onClick={() => openPreview(post.postId)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {status && (
                <PostPreviewA postDetail={postPreviewProps} previewVisible={status} onClose={() => setStatus(false)} />
            )}
        </>
    );
}

export default PostGallery;
