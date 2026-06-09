import React from 'react'

const Buttons = () => {
  const title = ["All titles", "Trending now", "New releses", "RPG", "Actions"]
    return (
    <div className='flex items-center mt-20 gap-5'>
        {title.map((t,i) => 
            <button className='p-1 bg-[#262626] active:bg-blue-500 px-6 cursor-pointer rounded-full' key={i}>
                {t}
            </button>

        )}
    </div>
  )
}

export default Buttons