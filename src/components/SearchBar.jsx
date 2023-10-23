import React, { useState } from 'react'

const SearchBar = () => {
    const [mySearch, setSearch] = useState("")
    return (
        <div className=''>
            <input type="text"
                className='py-2 pl-2 m-4
                 w-[95%] placeholder:text-white
                  text-white text-xl bg-transparent rounded-xl'
                name="search" id="search" placeholder='search your city'
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar