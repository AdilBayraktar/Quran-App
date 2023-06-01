import React from 'react'
import { Watch } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <Watch
                height="120"
                width="120"
                radius="48"
                color="#2563EB"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader