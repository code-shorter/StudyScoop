import React from 'react'

function HomeBox({props}) {
  const {title, img} = props;
  return (
    <div className="min-w-[130px] lmobile:min-w-[150px] mobile:min-w-[170px] min-[768px]:w-[200px] lg:w-[190px] xl:w-[250px] gradient-2box flex-1 bg-[#EC7063] shadow-[0_0_10px_0px_#00000052] rounded-2xl font-[aBeeZee] w-full text-white py-1 text-md flex items-end justify-center">{title}</div>
  )
}

export default HomeBox