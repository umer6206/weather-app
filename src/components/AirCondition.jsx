import React from 'react'
import { faTemperatureHalf, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AirCondition = (props) => {
    return (
        <div className='py-3  mb-2 text-white rounded-xl md:mx-[16px] mt-1 '>
            <h1 className='md:text-2xl text-slate-500 pl-4'>Air Conditions</h1>
            <div className='md:flex'>
                <div className='md:mr-20'>
                    <div className='flex m-5'>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                        <div className='pl-4'>
                            <h1 className='text-gray-400'>Real Feel</h1>
                            <h1 className='text-lg'>{ props.res.feels}°</h1>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <FontAwesomeIcon icon={faDroplet} />
                        <div className='pl-4'>
                            <h1 className='text-gray-400'>Chance of rain</h1>
                            <h1 className='text-lg'>0%</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex m-5'>
                        <FontAwesomeIcon icon={faWind} />
                        <div className='pl-4'>
                            <h1 className='text-gray-400'>Wind</h1>
                            <h1 className='text-lg'>{props.res.wind_speed}m/s</h1>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <FontAwesomeIcon icon={faDroplet} />
                        <div className='pl-4'>
                            <h1 className='text-gray-400'>UV index</h1>
                            <h1 className='text-lg'>0%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirCondition