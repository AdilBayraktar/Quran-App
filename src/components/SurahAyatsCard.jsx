import React from 'react'

const SurahAyatsCard = ({ surah }) => {
    const img = '/basmaleh.png'
    console.log(surah)
    // // const fixedSurah = surah?.ayahs.toString().s
    // console.log(fixedSurah)
    return (
        <div className='lg:w-[70%] rounded-3xl md:w-[80%] sm:w-[100%] bg-[#dabf9a]'>
            <div className='flex justify-center p-2 rounded-t-3xl bg-orange-100'>
                <img src={img} className='w-[30%]' alt="" />
            </div>
            <div className='flex flex-wrap py-8 px-5 items-center text-center justify-center'>
                {
                    surah?.ayahs?.map((ayah, i) => (
                        <div key={i} className="flex items-center lg:text-3xl md:text-2xl sm:text-xl mx-1 justify-center">
                            <span className=' mx-1 lg:leading-[4rem] md:leading-[3rem] sm:leading-[2.5rem]'>{ayah?.text} <span className='bg-yellow-100 w-[40px] h-[40px] text-lg font-bold text-black rounded-full'>{i + 1}</span></span>
                            {/* <span className='bg-yellow-200 text-xl text-black rounded-full h-[24px] w-[24px] flex items-center justify-center'>{i + 1}</span> */}

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default SurahAyatsCard