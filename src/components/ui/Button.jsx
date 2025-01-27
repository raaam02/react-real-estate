import React from 'react'

const Button = ({text, type}) => {
    const color = type === 'ghost' ? 
    'bg-transparent border border-indigo-100 text-indigo-100 hover:text-indigo-200 hover:border-indigo-200' 
    : 
    'bg-indigo-600 text-gray-100 hover:bg-indigo-700 hover:text-gray-200'

  return (
    <button className={`
        ${color}
        tracking-wide p-3 px-4 font-semibold rounded transition-all ease-in-out duration-200`
        }>
        {text}
    </button>
  )
}

export default Button
