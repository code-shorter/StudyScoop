import React from 'react'

function PopupBtn({props}) {
  const {name, visible} = props;
  return (
    <div className={visible === true ? `grey-btn w-full py-[2px] text-center bg-zinc-100 rounded-md text-zinc-600` : 'hidden'}>{name}</div>
  )
}

export default PopupBtn