import React, { useEffect, useState } from 'react'
import './App.css'
import {Hero, Seven_day_forrecast, TodaysForcast, AirCondition } from './components/index'
import { motion } from 'framer-motion'

const App = () => {
    const [mySearch, setSearch] = useState("islamabad")
    if (mySearch == "") {
        setSearch("islamabad")
    }
    const [country, setCountry] = useState("")
    const [temperature, setTemperature] = useState("")
    const [Feels_like, setFeels_like] = useState("")
    const [wind, setWind] = useState("")
    const [minTemp, SetMinTemp] = useState("")
    const [maxTemp, SetMaxTemp] = useState("")
    const data = async () => {
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mySearch}&APPID=9c14c9fa37155473eb34f644403357ac`)
        result = await result.json();
        setCountry(result.name)
        let tempp = result.main.temp - 273
        setTemperature(tempp.toFixed(2))
        tempp = result.main.feels_like - 273
        setFeels_like(tempp.toFixed(2))
        setWind(result.wind.speed)
        tempp = result.main.temp_min - 273;
        SetMinTemp(tempp.toFixed(2))
        tempp = result.main.temp_max - 273;
        SetMaxTemp(tempp.toFixed(2))
    }
    useEffect(() => {
        data();
    })

    const myData = { country_name: country, temper: temperature, minTemperature:minTemp, maxTemperature:maxTemp }
    const air = {feels:Feels_like, wind_speed: wind}
    return (
        <>
            <div className=' img_bg flex w-[100%] h-[100vh] bg-black'>
                <div className='w-[78%]'>
                    <motion.div initial={{ y: -300 }} animate={{ y: 1 }} transition={{ duration: 0.5, type: "tween" }}>
                        <div className='flex'>
                            <input type="text"
                                className='py-2 pl-2 m-4
                                           focus:outline-none
                                           w-[95%] placeholder:text-gray-400
                                          text-white text-xl bg-transparent rounded-xl'
                                name="search" id="search" placeholder='search for city...'
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}
                            />
                          
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: -1100 }} animate={{ x: 1 }} transition={{ duration: 0.5, type: "tween" }}>
                        <Hero data={myData} /></motion.div>
                    <motion.div initial={{ x: -1000 }} animate={{ x: 1 }} transition={{ duration: 0.6, type: "tween" }}>
                        <TodaysForcast /></motion.div>
                    <motion.div initial={{ x: -900 }} animate={{ x: 1 }} transition={{ duration: 1, type: "tween" }}>
                        <AirCondition res = {air} /></motion.div>
                </div>

                <motion.div initial={{ x: 600 }} animate={{ x: 1 }} transition={{ duration: 0.5, type: "tween" }}>
                    <Seven_day_forrecast /></motion.div>

            </div>
        </>
    )
}

export default App