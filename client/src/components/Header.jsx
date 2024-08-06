import React from 'react'
import { Link } from 'react-router-dom'
import NotificationIcon from './notificationIcon'

function Header({logoname}) {
  const notifyOn = 'block';
  const notifyAlert = 'hidden';
  const notifyOff = 'hidden';
  var logoName;
  var padd;
  if (logoname === true) {
    logoName = 'StudyScoop';
    padd = 'py-2';
  } else {
    logoName = '';
    padd = 'py-3';
  }
  return (
    <header>
        <div className={`w-full h-fit bg-white px-4 ${padd} flex justify-between items-center shadow-md shadow-zinc-400`}>
            <span className='font-[amaranth] text-3xl'>{logoName}</span>
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