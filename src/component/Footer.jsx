
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<footer className=" bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2033 <Link href="/" className="hover:underline">Xd-Cinema™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" target='_blank' className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="#" target='_blank' className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="#" target='_blank' className="mr-4 hover:underline md:mr-6">Github</a>
        </li>
        <li>
            <Link to={`/contact`} className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer

