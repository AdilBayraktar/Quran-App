import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSurahAyats } from '../redux/slices/surahAyatsSlice'
import Loader from '../components/Loader'
import AnimatedLayout from '../Layouts/AnimatedLayout'
import ReactAudioPlayer from 'react-audio-player';

const AudioScreen = () => {
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
    console.log(surah)
    return (
        <div>
            {
                surah.isLoading ? <Loader />
                    :
                    <div>
                        <ReactAudioPlayer
                            src='https://download.quranicaudio.com/qdc/abdul_baset/mujawwad/1.mp3'
                            autoPlay
                            controls
                        />
                    </div>
            }
        </div>
    )
}

export default AudioScreen