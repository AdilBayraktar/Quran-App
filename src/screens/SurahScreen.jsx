import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSurahAyats } from '../redux/slices/surahAyatsSlice'
import SurahAyatsCard from '../components/SurahAyatsCard'
import Loader from '../components/Loader'
import AnimatedLayout from '../Layouts/AnimatedLayout'


const SurahScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const surah = useSelector(state => state.getSurahAyats)
    useEffect(() => {
        dispatch(getSurahAyats(id))
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        })
    }, [])

    // console.log(surah)

    return (
        <div className="flex justify-center">
            {
                surah.isLoading ? <Loader />
                    : <AnimatedLayout>
                        <div className="flex justify-center">
                            <SurahAyatsCard surah={surah?.data?.data?.data} />
                        </div>
                    </AnimatedLayout>
            }
        </div>
    )
}

export default SurahScreen