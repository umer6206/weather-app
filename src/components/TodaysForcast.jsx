import React from 'react'
import Today from './subComponents/Today'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog, faCloudSun, faSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
const TodaysForcast = () => {
    
    return (
        <div className='py-3  text-white rounded-xl md:mx-3'>
            <h1 className='md:text-2xl text-slate-500 md:mb-1 pl-4'>Today's Forecast</h1>
            <div className='md:flex'>
                <Today icon={faCloudShowersHeavy} />
                <Today icon={faSmog} />
                <Today icon={faSun} />
                <Today icon={faSun} />
                <Today icon={faSun} />
                <div className='lg:mx-16 md:mx-9 sm:mx-2 '>
                    <h1>6:00</h1>
                    <FontAwesomeIcon  icon={faSmog} />
                    <h1 className='text-2xl'>25°</h1>
                </div>

            </div>
        </div>
    )
}

export default TodaysForcast