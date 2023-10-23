import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog, faThunderstorm, faSun, faCloud } from '@fortawesome/free-solid-svg-icons'
import Seven from './subComponents/Seven'
const Seven_day_forrecast = () => {
    return (
        <div className='py-10  text-white px-9 mt-4 rounded-xl w-auto md:ml-[16px]'>
            <h1 className='md:text-2xl md:mb-4 text-slate-500 '>7-DAY FORECAST</h1>
            <Seven icon={faSun} />
            <Seven icon={faSun} />
            <Seven icon={faSun} />
            <Seven icon={faSmog} />
            <Seven icon={faSmog} />
            <Seven icon={faCloud} />
            <div className='flex justify-between'>
                <p>Today</p>
                <FontAwesomeIcon icon={faThunderstorm} />
                <p>Sunny</p>
                <p>36/22</p>
            </div>
        </div>
    )
}

export default Seven_day_forrecast