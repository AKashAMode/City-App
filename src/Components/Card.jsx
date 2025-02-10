import React from 'react'

const Card = (props) => {
const {title, paragraph} = props;
  return (
    <div className='my-6 p-4 border-[4px] bg-violet-300 border-blue-300 rounded-xl'>
    <h2 className='text-2xl font-bold'>{title}</h2>
    <p className='text-[18px] text-left'>{paragraph}</p>
    </div>
  )
}

export default Card;