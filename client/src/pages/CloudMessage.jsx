import React from 'react';

const BORDER_CLASSES = 'border-b border-zinc-300 dark:border-zinc-700';
const TEXT_CLASSES = 'text-zinc-900 dark:text-white';
const AVATAR_CLASSES = 'w-12 h-12 rounded-full';
const STATUS_DOT_CLASSES = 'absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full';

const CloudMessage = () => {

    const goBack = () => {
        history.back();
    };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className={`flex items-center justify-between p-4 ${BORDER_CLASSES}`}>
        <div className="flex items-center">
          <button className={TEXT_CLASSES + " cursor-pointer"} onClick={goBack}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 className="ml-2 text-xl font-semibold text-zinc-900 dark:text-white">Cloud message</h1>
        </div>
        <button className={TEXT_CLASSES}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 space-y-4">
        
        <UserMessage name="Tamesh" message="Kya kr raha hai ?" />
        <UserMessage name="Ankita" message="Syallbus ??" />
        <UserMessage name="Ankesh" message="Aaj mood nhi • 15min ago" showStatusDot />
        <UserMessage name="Infinity Study" message="photo bhej na • 2 min ago" />
      </div>
    </div>
  );
};

const UserMessage = ({ name, message, showStatusDot }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img className={AVATAR_CLASSES} src="https://placehold.co/100x100" alt="User avatar" />
        {showStatusDot && <span className={STATUS_DOT_CLASSES}></span>}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{name}</h2>
        <p className="text-zinc-500 dark:text-zinc-400">{message}</p>
      </div>
    </div>
  );
};

export default CloudMessage;
