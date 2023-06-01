import React from 'react'
import { Link } from 'react-router-dom'

const SurahCard = ({ surah }) => {
    return (
        <div className='w-[200px] rounded-3xl m-3 shadow-sm shadow-blue-100 bg-white px-5 py-3'>
            <Link to={`/surah/${surah?.number}`} className='text-center'>
                <p className='text-xl my-2 font-bold'>{surah?.name}</p>
                <p className='mb-5'>{surah?.englishName}</p>
                <div className="flex justify-between">
                    <span className='bg-blue-300 p-1 text-white rounded-lg text-xs'> عدد الآيات :{surah?.numberOfAyahs}</span>
                    {
                        surah?.revelationType === 'Meccan' ? <span className='bg-blue-300 p-1 rounded-lg text-xs text-white'>مكية</span>
                            : <span className='bg-blue-300 p-1 rounded-lg text-xs text-white'>مدنية</span>
                    }
                </div>
            </Link>
        </div>
    )
}

export default SurahCard