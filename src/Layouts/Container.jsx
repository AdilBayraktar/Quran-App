import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='p-10 my-5 min-h-[100vh]'>
            {children}
        </div>
    )
}

export default Container