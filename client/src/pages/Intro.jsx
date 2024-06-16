import React from 'react'
import IntroBox from '../components/IntroBox'
import { useNavigate } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';

function Intro() {
  const navigate = useNavigate();

  const SignUp = () => {
    navigate('/signup');
  };
  const LogIn = () => {
    navigate('/login');
  };
  return (
    <>
    <LoadingBar />
    <header>
      <div className="w-full h-fit bg-white p-3 flex justify-between items-center">
          <span className='font-[amaranth] text-3xl'>StudyScoop</span>
          <button onClick={LogIn} className="font-[aBeeZee] py-1 px-4 rounded-2xl text-white bg-[#0096FF]">Login</button>
      </div>
    </header>
    <main id='main'>
        <div className="main-content relative h-[91vh] w-full p-4">
          <IntroBox props={{
            outerBox: "w-28 h-32 top-[7%] rounded-xl translate-y-[-10%] md:w-32 md:h-36 md:top-16 md:left-16",
            outerContent: "",
            innerBox: "text-sm py-1 rounded-b-xl rounded-t-md leading-[16px] md:text-lg md:py-2 md:leading-[20px]",
            innerContent: "Share Study posts"
          }} />
          <IntroBox props={{
            outerBox: "w-[107px] h-28 top-1/4 right-4 translate-x-[-10%] rounded-xl min-[320px]:top-[18%] md:w-[130px] md:h-36 md:top-30 md:right-16",
            outerContent: "",
            innerBox: "text-sm py-1 rounded-b-xl rounded-t-md leading-[16px] md:text-lg md:py-2 md:leading-[20px]",
            innerContent: "Connect with Studymates",
          }} />
          <p className="main-text text-3xl font-[aBeeZee] font-bold text-start absolute text-zinc-600 top-1/3 translate-y-[30%] min-[375px]:text-4xl min-[425px]:text-5xl min-[425px]:font-medium md:left-14 md:text-6xl">Get Focused <br /> and Study</p>
          <IntroBox props={{
            outerBox: "w-[107px] h-28 rounded-xl top-1/2 right-6 translate-x-[-10%] translate-y-[-20%] md:w-[120px] md:h-32 md:right-8 md:translate-x-[-10%] md:translate-y-[30%]",
            outerContent: "",
            innerBox: "text-sm py-2 rounded-b-xl rounded-t-md leading-[16px] md:text-lg md:py-3 md:leading-[20px]",
            innerContent: "Your Library",
          }} />
          <IntroBox props={{
            outerBox: "w-[94px] h-40 top-[40%] translate-y-[75%] min-[375px]:w-[110px] rounded-xl md:w-[130px] md:h-48 md:translate-y-[70%] md:left-8",
            outerContent: "",
            innerBox: "text-[12px] min-[375px]:text-[14px py-1 min-[375px]:py-2 rounded-b-xl rounded-t-md leading-[16px] md:text-lg md:py-3 md:leading-[20px]",
            innerContent: "Motivate with StudyFlicks",
          }} />
          <button onClick={SignUp} className='px-10 py-2 bg-[#0096FF] text-white text-xl rounded-lg absolute left-1/2 translate-x-[-20%] top-1/2 translate-y-[320%] shadow-xl md:left-1/2 md:translate-x-[-50%] md:translate-y-[220%] md:px-14 md:py-4 md:text-2xl'>Get Start</button>
          <span className="text-center font-[aBeeZee] max-[767px]:rounded-r-full text-lg py-[3px] pl-4 pr-6 bg-white absolute top-[90%] max-[767px]:left-0 md:right-0 md:rounded-l-full">And many more</span>
        </div>
    </main>
    </>
  )
}

export default Intro