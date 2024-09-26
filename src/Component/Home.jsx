import dp from '../images/dp3.jpg';
import resume from '../images/Dharsh.pdf';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Component/animation';

function Homes({ scrollToSection }) {
    const [subtitles] = useState([
        { name: "Resume", },
        { hire: "HireMe", color: "#fff0f5" }
    ]);

    const HireMe = () => {
        scrollToSection('Contact');  
    };

    return (
        <div className='w-full h-full bg-slate-100'>
            <div className='md:p-20 p-10 flex justify-center items-center gap-6 flex-wrap '>
                <img
                    src={dp}
                    alt='profile'
                    className='w-60 h-60 rounded-full shadow-lg shadow-zinc-700 md:w-80 md:h-80'
                />
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:p-3'
                >
                    <div className='p-2 flex gap-2 flex-col md:mt-3 '>
                        <motion.h1
                            className='md:text-6xl text-3xl tracking-wide font-bold text-center md:text-start'
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hey,
                        </motion.h1>
                        <motion.h1
                            className='text-2xl text-center md:text-start'
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span>I'm</span>
                            <strong className='text-blue-700'> Dharshini Sri Dharani</strong>
                        </motion.h1>
                    </div>
                    <motion.p
                        className='text-xl w-80 h-28 text-center md:text-start p-2 mb-3'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Passionate <strong className='text-blue-700'> Full Stack Developer</strong> with a knack for creating seamless, end-to-end web solutions.
                    </motion.p>
                    <div className='gap-3 flex justify-center mt-4'>
                        {subtitles.map((item, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center bg-blue-100 justify-center border-2 w-24 h-24 text-center rounded-full 
                                border-black tracking-wide transition duration-300 ease-out md:ease-in`}
                                style={{ backgroundColor: item.color }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a href={resume} download='Dharsh.pdf'>
                                    <span>{item.name}</span>
                                </a>
                                <button onClick={HireMe}>
                                    <span>{item.hire}</span>
                                </button>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Homes;
