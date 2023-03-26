

import React, { useEffect } from 'react';
import Oops from '../assets/Oops.png'
import { Link } from 'react-router-dom';
import Button from '../component/Button';


const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found`;
  },[])

  return (
    <main>

      <section className='flex flex-col jsutify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray font-blod my-10 dark:text-white'>404, Opps</p>

          <div className="max-w-lg">

          <img className='rounded' src={Oops} alt="404, Page not find" />
          </div>

        </div >

        {/* Link back to home */}
        <div className='flex justify-center my-4'>
        <Link to='/'>
          <Button>Back To Home</Button>
        </Link>
        </div>
      </section>
      
    </main>
  )
}

export default PageNotFound
