import React, { useState } from 'react';
import img from '../images/dp3.jpg'
import style from '../CSS/Home.module.css';
function Navbar({ scrollToSection }) {
    const [items] = useState(['Home', 'About', 'Academic', 'Projects', 'Contact']);

    const handleClick = (section, event) => {
        event.preventDefault();
        scrollToSection(section);
    };

    const [menu, setmenu] = useState(false)

    const handleMenubar = () => {
        setmenu(!menu)
    }


    return (
        <>
            <nav className="bg-slate-200 p-2 flex justify-between items-center shadow-xl sticky top-0 z-20">
                <div className='flex items-center p-2 gap-2'>
                    <img src={img} className='w-10 h-10 rounded-full'></img>
                    <h1 className="text-xl font-extrabold tracking-wider text-black">DHARSH</h1>
                </div>
                {
                    menu ?
                        ""
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6 md:hidden" onClick={handleMenubar}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                }


                <ul className="gap-5 text-gray-600 hidden md:flex">
                    {items.map((item, index) => (
                        <li key={index} className="tracking-wider text-xl hover:underline hover:text-blue-600 text-black ">
                            <a
                                href="#"
                                className="cursor-pointer"
                                onClick={(e) => handleClick(item, e)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={`fixed transition-all duration-500 bg-blue-50 w-[40%] h-screen z-50 ${menu ? 'left-[0]' : '-left-[60%]'} top-0 md:hidden `}>
                <div className=' flex justify-center items-center m-2 '>
                    <p className='text-xl right-6 mt-4 top-3 absolute text-center cursor-pointer hover:text-red-400' onClick={handleMenubar}>x</p>
                    <ul className="  flex flex-col justify-center mt-20 items-center gap-16 text-gray-600 md:hidden p-3">
                        {items.map((item, index) => (
                            <li key={index} className="tracking-wider text-xl hover:underline hover:text-blue-600 text-black ">
                                <a
                                    href="#"
                                    className="cursor-pointer"
                                    onClick={(e) => handleClick(item, e)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;