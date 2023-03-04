import React, {useState} from 'react'

const First = ({count, handleCounter}) => {
    // const [count, setCount] = useState(0)

    // const handleCounter = () => setCount(count+1);

  return (
    <div className='text-center w-2/4 mx-auto border-2 border-yellow-300 my-2 rounded'>
      <p className='text-xl my-2 text-slate-500'>Simple useState explore.</p>
        <button className='border-gray-300 rounded-lg px-4 py-2 bg-green-400 text-xl my-4 active:bg-green-500' onClick={handleCounter}>My count is <span className='text-pink-700'>{count}</span></button>
    </div>
  )
}

export default First