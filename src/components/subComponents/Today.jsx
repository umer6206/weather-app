import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSmog, faSun } from '@fortawesome/free-solid-svg-icons'
const Today = ({ icon }) => {
    let color = ''
    if (icon == faSun) {
        color = "text-yellow-300"
    }
    else if (icon == faSmog) {
        color = 'text-gray-400'
    }
    else {
        color = "text-white"
    }
    return (
        <>
            <div className='lg:mx-16 md:mx-9 sm:mx-2 '>
                <h1>6:00</h1>
                <FontAwesomeIcon className={`${color}`} icon={icon} />
                <h1 className='text-2xl'>25°</h1>
            </div>
            <div className='w-1 h-auto bg-white'> </div>
        </>
    )
}

export default Today