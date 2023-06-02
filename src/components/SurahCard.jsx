import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SurahCard = ({ surah }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[200px] rounded-3xl m-3 shadow-sm hover:shadow-lg transition cursor-default shadow-blue-100 bg-white px-5 py-3 text-center'>
            <p className='text-xl my-2 font-bold'>{surah?.name}</p>
            <p className='mb-5'>{surah?.englishName}</p>
            <div className="flex justify-between">
                <span className='bg-gray-400 p-1 text-white rounded-lg text-xs'> عدد الآيات :{surah?.numberOfAyahs}</span>
                {
                    surah?.revelationType === 'Meccan' ? <span className='bg-gray-400 p-1 rounded-lg text-xs text-white'>مكية</span>
                        : <span className='bg-gray-400 p-1 rounded-lg text-xs text-white'>مدنية</span>
                }
            </div>
            <div className="flex mt-5">
                <Link to={`/surah/${surah?.number}`} className='bg-gray-600 w-1/2 m-1 rounded-2xl hover:bg-gray-400 transition text-white px-2 py-1'>إقرأ</Link>
                <Link to={`/audio-list/${surah?.number}`} className='bg-gray-600 w-1/2 m-1 rounded-2xl hover:bg-gray-400 transition  text-white px-2 py-1'>استمع</Link>
            </div>
        </div>
    )
}

export default SurahCard