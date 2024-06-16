import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Style.css';

function Nav({ currentPage, user }) {
    const [focusedIcon, setFocusedIcon] = useState('');

    useEffect(() => {
        setFocusedIcon(currentPage);
    }, [currentPage]);

    return (
        <nav className='nav'>
            <div className="navbar">
                <Link to='/live-session' className='nav-link lg:mt-10 gap-4 lg:hover:bg-zinc-100 duration-300'>
                    <img id='live-session' width="30" height="30" src={focusedIcon === 'liveSession' ? "/src/assets/live-session-focus.png" : "https://img.icons8.com/pulsar-line/48/radio-waves.png"} alt="radio-waves"/>
                    <div className="nav-title hidden lg:block">Live Session</div>
                </Link>
                <Link to='/search' className='nav-link gap-4 lg:hover:bg-zinc-100 duration-300'>
                    <img width="30" height="30" src={focusedIcon === 'search' ? "https://img.icons8.com/ios-filled/50/search--v1.png" : "https://img.icons8.com/ios/50/search--v1.png"} alt="search--v1"/>
                    <div className="nav-title hidden lg:block">Search</div>
                </Link>
                <Link to='/home' className='nav-link gap-[16px] lg:hover:bg-zinc-100 duration-300'>
                    <img width="30" height="30" className='' src={focusedIcon === 'home' ? "https://img.icons8.com/material-sharp/30/home.png" : "https://img.icons8.com/material-outlined/30/home--v2.png"} alt="home--v2"/>
                    <div className="nav-title hidden lg:block">Home</div>
                </Link>
                <Link to='/create' className='nav-link hidden lg:flex gap-[16px] lg:hover:bg-zinc-100 duration-300'>
                    <img width="30" height="30" src={focusedIcon === 'home' ? "https://img.icons8.com/ios-filled/50/plus.png" : 'https://img.icons8.com/ios/50/plus--v1.png'} alt="plus"/>
                    <div className="nav-title hidden lg:block">Create</div>
                </Link>
                <Link to='/message' className='nav-link gap-4 lg:hover:bg-zinc-100 duration-300'>
                    <img width="30" height="30" src={focusedIcon === 'message' ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2ZSWyNURTHf4aiiRjapjUtbJCotoYIYtihMVUiNhIWqGHRJmIjIQSJSCzQWBhCLCwkNkRStLRU0FYtzCHmZ6rQIFGq5ZObnJd8ef3eu9/9pj7J+ydn0fed4f7vcO65p5BBBhlEgV5AMbAeOAbUA6+BNqBLpE1+qxcdpVsktj2OKUAVEAMsj/JGfEzuCQKLgUYfg08mN4FFURAoAW6EQCBRrstWDRx9gJ3A7whIWCIq1g6JHQhygJoICVgJclHG4AsFwL0eJGGJPAJGeCWRBzxJAxKWyGMg15REfzlwfoP/kUyk0utWYDtw2McEXQP6mRDZ55NAJ3AQGJUixiTgnAffe92SmCUz6ZXEO2Cizd9QYAlQCVQApUC27fsqoN1wlWfoSKhyodnD4D8BZ4ADwGjxpfbzCeCng/53SecDRHeBYWq/pSttygwJqAGVO+xbVUO9dWHfaDvAWwxjp6wAag0cfUtY4nGyhWYDLw381AG9gb6SmUzuF0eMBP4aOFKrh+T3Cz7OlJKV4qvC8KwMcyJSbuCkyZamW3ySsCRFxyfTxG6NE5GTLo1r5bJUWB4AifjsDhSfLwzsVDLphjsuDFtkFZCz8DQgIkrGil+V9e66tLntRKRVY9RlC1Ymf1sByiXJdvFzpxuPko9ORH5pjM6LXo6kXSsE+SqvzvhFqdNXd1Q3OF1cdtkoeptCIhGXZrns1Bb+4oXIe41RqWFS8CNjJFadRu+DExFdGp0neqciIDLXZSy1et1wVGO0TvQ2R0CkUGLpLtrjTkTWaozOil5+iIfdkhepQpb0wlLprnYikq9JqerbeNFdFlIjoh2YLjFWuLhE1VPcETUuqtV46T1TXpF+3i5xUTVeg61JlyeNu1Q2atslxXwXQZWDwQkPpyLJ/16kxFbyILPspvm3EA2aXDiJyeEfQnAYBGyQlOqmyNT2jKcalB/qnDyQfF/rUS4D94EOlzHV2KZF1XwIU/aYLHOWtP+tNJN6GZsRctOsQfdQEosnFBi8DcImMdwrCfvKmDQlgpZqPyuRCNXl2BUxgQ5ps6rYgWJCxIe6kJBQGQGBBtu7JzRcDWnwr4D9UqqEjmIXA/oBbAMOAVeAZ8Bn2eudUpI/l29H5NkQ2vZJhtMaEq1SDac15mhaqdVB5PiwkZ2isawaekv5T1Ble7nFZH/vlv82ZZAByfEPVAIzXogpHPQAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbUlEQVR4nO2Za4hVVRTHf2pN2qQz2kN7WNSkZT4KRypKQxCjvhg05SPTPgmVr0QrNVHqW0QhRX4KS1Q0FLOhiJ5YlmhILzUdq5FCU3wlNo6P0okF/xOb6zn37n3uuXduNH/YMHfWXmuvc87ea/3X2tCBDnSgXLgWGAe8BLwDfA/8AhzWsL+/A9ZpzligLxWCG4EXgO1AW8L4UyNJ/gPwPFDXHg8wAvgAOOs4ZG/7VWAiMAzoFaPXS7JHgdf01SJ9s/U+cFc5HqBOi0WLNwPzgOuLsHkDMB/Y49htLNJmIjoBTwEntFCTzkPnDNcwWxOA3VqjBZieoX0uAdbI+El9gQsoHS4EngNOac3VQHWxRm1Pb5ZBe1ODKB+GAD9p7U1AbVpD3YFvZGgDUEP5UQt8Lh+2ancEoYuikhn4COhG++Fi4FP58p5888YCKVp47EH7owbYJp/m+irdCpxREuuXgRM9gTHADEWh+1J+4ZsUNU/7ntVP9ORPUhwuBZYq0uVm8+PK5l0Dbc6U/oeFJo7UxB1FhtjBwN4cGrJKobTZ+f9mPXBIaN4p3XvyTVynSUYz0nz6MaIve5yQfXfM3AeAg5rzWWBinSy9t/OFujNaoCrA8FVOhHNHc4G3PQA4prmTAta7SGz6dFIgGiujSwONbpVeK/AVcES/7/fQf9pJeCF4S3oPxQkXSzg+wODD0jnk0HB7S9M89fs4zDck2T0ivVfihFHSsU/ugxEOwTNKnhZ/yEb/AJ2B0vk4Ttgkoc/5sMP6t+b/BUwlPQ44IXWwp05X6exKMmj73IdIHpehN4HeYX6f59BOp0A7BtR76lp+2h8n2C/qXAiznBxgdUoWuNpJxF972jVff48T7JAhI2k+EeMZsoWF6qhw61fM1ooOuyW2fFiheUYss8Y22R5dzGF/0TM5zda8bzOuFO3stcq2OZoPE/OF3wclfKOAkSucw74mo97UNap72sTLCmGZ5jbECatV8B9Vxs6HBtGZiI4cUAMuzXDJZStwp8f5OKzDblVsLFYGkEYjgxtzeltpxzngC2Cox7qPScfYdCLqZbQpYP/3VCKrTzmskLssgMbv0oMMLzR5vSZaEVNpmCXfjG17df5atF9vpnIwQD6d8ohq/2Kqnny7tk57o9ZJ2EGJuJMT4jZ4ZPtSolo+mC/vpmnTVjnZflNgbZ3ll9goH7YU0zrtpqZYVH/blUC5cBvws9b+MotOp4W812XQkuCzlBZVwEKnib0yiya2iwkybM2JUsDy1iRl++im6/FSLFTn7NWsr++MSf/mZHm7g7yOEiFinEsS5PNVu08BblflmMvZLpdssrZrFFKjBkQjcAclRnTldm/Mlog6MHHjpBJsktzKgUWlumrLxZVqMvya09bvr05hxIDHKWEtV4/rR5XQh7T37b5lrWqfBjX3yorFcvYJZ4u8rG5fmxoIlURnYnGLHG5RdbjeeYCITifWBZWCLkpGcXvbrsRG8R/BTFWM+1SCGteZE9CN7MD/Fv8A+2OItaTyOzQAAAAASUVORK5CYII="}></img>
                        <div className="nav-title hidden lg:block">Message</div>
                </Link>
                <Link to={`/profile`} className='nav-link gap-[17px] lg:hover:bg-zinc-100 duration-300'>
                    <div className={`w-[30px] h-[30px] lg:w-[41px] rounded-full flex items-center justify-center ${ focusedIcon === 'profile' ? `bg-[#000]` : `bg-[#EC7063]`}`}>
                        <img src={user.userPic} alt="" className="Nav-user-pic w-[22px] h-[22px] bg-slate-500 rounded-full" />
                    </div>
                    <div className="nav-title hidden lg:block">Profile</div>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
