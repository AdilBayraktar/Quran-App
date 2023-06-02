import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAllRecitations } from '../redux/slices/recitationsSlice'
import Loader from '../components/Loader'
import AnimatedLayout from '../Layouts/AnimatedLayout'

const AudioListScreen = () => {
    const { surahId } = useParams()
    const dispatch = useDispatch()
    const recitationsList = useSelector(state => state.getAllRecitations)
    useEffect(() => {
        dispatch(getAllRecitations())
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        })
    }, [])

    // console.log(recitationsList)
    // console.log(surahId)

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                recitationsList.isLoading ? <Loader /> : recitationsList?.data?.data?.recitations?.map((rec, i) => (
                    <AnimatedLayout>
                        <Link key={i} to={`/surah-audio/${rec?.id}/${surahId}`}>
                            <div className='w-[300px] rounded-3xl  cursor-pointer m-3 shadow-sm hover:shadow-lg transition shadow-blue-100 bg-white px-5 py-3 text-center'>
                                <p className='text-xl font-bold'>{rec?.translated_name?.name}</p>
                                <p className='text-gray-600'>{rec?.reciter_name}</p>
                                {
                                    <div className='flex justify-center'>
                                        {
                                            rec?.style === 'Mujawwad' ? <p className='bg-gray-300 w-fit px-2 py-1 rounded-xl text-gray-800 text-base my-2'>تجويد</p>
                                                : <p className='bg-gray-300 w-fit px-2 py-1 rounded-xl text-gray-800 text-base my-2'>ترتيل</p>
                                        }
                                    </div>
                                }
                            </div>
                        </Link>
                    </AnimatedLayout>
                ))
            }
        </div>
    )
}

export default AudioListScreen