import React from 'react'
import Logo from '../../public/Logo.png'
import Button from './ui/Button'

const Navbar = () => {
  return (
    <header>
        <div className='w-full min-h-screen flex justify-center items-center flex-col bg-cover bg-center' style={{backgroundImage: 'url(../../public/header_img.png)'}}>
            <nav>
                <div className='w-full absolute top-0 left-0 flex justify-between items-center px-5 py-4'>
                    <div className='flex justify-center items-center gap-2'>
                        <img width={50} src={Logo} alt="Logo" />
                        <div className='text-3xl font-semibold text-indigo-100'>Estate</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <ul className='flex justify-between items-center text-xl gap-5 tracking-wider text-gray-100'>
                            <li className='hover:text-indigo-600 transition-all duration-200 ease-in-out'>Home</li>
                            <li className='hover:text-indigo-600 transition-all duration-200 ease-in-out'>About</li>
                            <li className='hover:text-indigo-600 transition-all duration-200 ease-in-out'>Projects</li>
                            <li className='hover:text-indigo-600 transition-all duration-200 ease-in-out'>Testimonails</li>
                        </ul>
                    </div>
                    <div className=''>  
                        <Button text='Sign up' />
                    </div>
                </div>
            </nav>
            <div className='w-[75%] flex justify-center items-center flex-col text-gray-100 p-12'>
                <h1 className='text-7xl text-center font-bold p-10'>Explore homes that fit your dreams</h1>
                <div className='p-2 flex justify-center items-center gap-5'>
                    <Button type={'ghost'} text={'Projects'} />
                    <Button text={'Contact us'} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
