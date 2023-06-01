import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSurahAyats } from '../redux/slices/surahAyatsSlice'
import SurahAyatsCard from '../components/SurahAyatsCard'
import Loader from '../components/Loader'


const SurahScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const surah = useSelector(state => state.getSurahAyats)
    useEffect(() => {
        dispatch(getSurahAyats(id))
    }, [])

    console.log(surah)

    return (
        <div className="flex justify-center">
            {
                surah.isLoading ? <Loader /> : <SurahAyatsCard surah={surah?.data?.data?.data} />
            }
        </div>
    )
}

export default SurahScreen