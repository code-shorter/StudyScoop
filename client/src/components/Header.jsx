import React from 'react'
import { Link } from 'react-router-dom'
import NotificationIcon from './notificationIcon'

function Header() {
  const notifyOn = 'block';
  const notifyAlert = 'hidden';
  const notifyOff = 'hidden';
  return (
    <header>
        <div className="w-full h-fit bg-white px-4 py-2 flex justify-between items-center shadow-md shadow-zinc-400">
            <span className='font-[amaranth] text-3xl'>StudyScoop</span>
            <Link to="/notifications">
                <NotificationIcon props={{
                  notifyOn: notifyOn,
                  notifyAlert: notifyAlert,
                  notifyOff: notifyOff,
                }} />
            </Link>
        </div>
    </header>
  )
}

export default Header