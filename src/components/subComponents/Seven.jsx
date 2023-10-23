import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSmog, faSun } from '@fortawesome/free-solid-svg-icons'
const Seven = ({ icon }) => {
    let color = ''
        if (icon == faSun) {
            color ="text-yellow-300"
        }
        else if (icon == faSmog) {
            color = 'text-gray-400'
         }
        else {
            color = "text-white"
        }
   
  return (
      <div className='my-[30px]'>
          <div className='flex justify-between'>
              <p>Today</p>
              <FontAwesomeIcon className={`${color} `} icon={icon} />
              <p>Sunny</p>
              <p>36/22</p>
          </div>
          <div className='h-[2px] my-3 w-auto bg-gray-300'></div>
      </div>
  )
}

export default Seven