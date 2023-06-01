import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSurahsInfo } from '../redux/slices/surahSlice'
import SurahCard from '../components/SurahCard'
import Loader from '../components/Loader'
import AnimatedLayout from '../Layouts/AnimatedLayout'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const surahs = useSelector(state => state.getSurahsInfo)
    useEffect(() => {
        dispatch(getSurahsInfo())
    }, [dispatch])
    console.log(surahs)
    return (
        <div>
            {
                surahs.isLoading ? <Loader /> : <AnimatedLayout>
                    <div className='flex flex-wrap justify-center'>
                        {surahs?.data?.data?.data?.map((surah, i) => (
                            <SurahCard key={i} surah={surah} />
                        ))}
                    </div>

                </AnimatedLayout>
            }
        </div>
    )
}

export default HomeScreen