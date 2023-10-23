
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCloud, faSun } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
const Hero = (props) => {
  return (
    <>
      <div className='md:flex py-5  text-white mb-1 rounded-xl md:mx-[16px]'>
        <div className='mx-16 md:w-auto'>
          <h1 className='md:text-3xl md:mb-3'>{props.data.country_name}</h1>
          <p className='text-gray-400 md:mb-10'>chances of rain<span> 0%</span></p>
          <h1 className='md:text-4xl font-bold'>{props.data.temper}°</h1>
        </div>
        <motion.div animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }} className=' flex items-center justify-center'>
          <FontAwesomeIcon className='text-yellow-300 md:w-[100px] w-[50px] h-auto mr-11' icon={faSun} />
        </motion.div>
        <div className='md:ml-[200px]'>
          <h1 className='pt-3'>Min Temp <span className='pl-2 text-gray-400'>: {props.data.minTemperature}°</span></h1>
          <h1 className='pt-3'>Max Temp <span className='pl-2 text-gray-400'>: {props.data.maxTemperature}°</span></h1>
          <h1 className='pt-3'>Sun Rise <span className='pl-5 text-gray-400'>:</span></h1>
          <h1 className='pt-3'>Sun Set <span className='pl-7 text-gray-400'>:</span></h1>
        </div>
      </div>
    </>
  )
}

export default Hero