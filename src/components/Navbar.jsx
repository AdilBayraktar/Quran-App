import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className='flex justify-between px-10 h-16 items-center bg-blue-600 top-0 text-white rounded-b-3xl shadow-md sticky z-50'>
            <Link to={'/'}><div className='font-semibold text-2xl'>القرآن الكريم</div></Link>
            <div className='flex space-x-5'>
                <Link to={'/'} className='hover:text-slate-300 transition'>الرئيسية</Link>
                {/* <Link to={'/surah'} className='hover:text-slate-300 transition'></Link> */}
            </div>

        </div>
    )
}

export default Navbar