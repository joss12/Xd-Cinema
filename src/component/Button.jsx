import React from 'react'

const Button = ({children}) => {
  return (
    <div>
      <button className='w-64 text-xl bg-green-300 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium hover:bg-white-100 focus:ring-purple-200'>
        {children}
      </button>
    </div>
  )
}

export default Button
