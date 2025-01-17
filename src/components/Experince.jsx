import React from 'react'
import { EXPERIENCES } from '../constants'

const Experince = () => {
  return (
    <div className='border-b border-nerutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experince</h1>
        <div>
            {EXPERIENCES.map((experince, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experince.year}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Experince