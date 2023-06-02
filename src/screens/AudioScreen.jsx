import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import AnimatedLayout from '../Layouts/AnimatedLayout'
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios'
import { getSurahsInfo } from '../redux/slices/surahSlice'

const AudioScreen = () => {
    const { recitationId, surahId } = useParams()
    const [surahName, setSurahName] = useState('')
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const surahs = useSelector(state => state.getSurahsInfo)
    useEffect(() => {
        dispatch(getSurahsInfo())
        axios.get(
            `https://api.quran.com/api/v4/chapter_recitations/${recitationId}/${surahId}`
        ).then(res => {
            setData(res)
        })
        if (data) {
            setSurahName(surahs?.data?.data?.data?.filter(item => item.number == data?.data?.audio_file?.chapter_id))
        }
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        })
    }, [])
    // console.log(surahName)
    // console.log(surahs)
    return (
        <div>
            {
                (!data) ? <Loader />
                    :
                    <AnimatedLayout>
                        <div className='text-center'>
                            {
                                surahName.length ? <p className='my-5 text-4xl font-bold'>{surahName[0]?.name}</p> : null
                            }
                            <div className="flex justify-center">
                                <ReactAudioPlayer
                                    src={data?.data?.audio_file?.audio_url}
                                    controls
                                    className='w-[80%] h-[100px]'
                                />
                            </div>
                        </div>
                    </AnimatedLayout>
            }
        </div>
    )
}

export default AudioScreen