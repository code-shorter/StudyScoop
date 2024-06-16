import React from 'react'

function IntroBox({props}) {
  return (
    <div className={`bg-[#EC7063] ${props.outerBox} absolute flex items-end shadow-xl ${props.outerContent}`}>
    <div className={`bg-white w-full ${props.innerBox}  font-[aBeeZee] text-center`}>{props.innerContent}</div>
  </div>

  )
}

export default IntroBox