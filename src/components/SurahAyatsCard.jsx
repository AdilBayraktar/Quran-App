import React from 'react'
import { GiArabicDoor } from 'react-icons/gi'

const SurahAyatsCard = ({ surah }) => {
    console.log(surah)
    // // const fixedSurah = surah?.ayahs.toString().s
    // console.log(fixedSurah)
    return (
        <div className='lg:w-[70%] py-8 px-5 flex flex-wrap items-center text-center justify-center rounded-3xl text-white md:w-[75%] sm:w-[90%] bg-yellow-800'>
            {/* <p>{surah?.ayahs[0]?.text}</p> */}
            {
                surah?.ayahs?.map(ayah => (
                    <div className="flex items-center justify-center">
                        <span className='text-lg'>{ayah?.text} </span><span className='m-1 bg-white text-black rounded-full h-[20px] w-[20px] flex items-center justify-center'>1</span>

                    </div>
                ))
            }
        </div>
    )
}

export default SurahAyatsCard