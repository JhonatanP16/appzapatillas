import React from 'react'

const Title = ({title}) => {
  return (
    <>
    <div className='grid items-center'>
    <h1 className=' lg:text-4xl md:text-3xl text-5xl font-bold
            text-slate-900 filter'>{title}</h1>
    </div>
    </>
  )
}

export default Title
