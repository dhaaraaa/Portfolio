import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import { FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import linkedin from '../images/linkedin.png';
import Html from '../images/html.png';
import js from '../images/js.png';
import css from '../images/css-3.png';
import nodejs from '../images/nodejs.png';
import react from '../images/physics.png';
import res from '../images/cross-platform.png';
import { motion } from 'framer-motion';

function About() {
    // State for skills
    const [skills] = useState([
        { name: 'HTML', icon: <img src={Html} alt="HTML" className='w-10 h-10' /> },
        { name: 'CSS', icon: <img src={css} alt="css" className='w-10 h-10' /> },
        { name: 'TailwindCSS', icon: <RiTailwindCssFill className='w-10 h-10' /> },
        { name: 'JavaScript', icon: <img src={js} alt="JS" className='w-10 h-10' /> },
        { name: 'ReactJS', icon: <img src={react} alt="react" className='w-10 h-10' /> },
        { name: 'Git/Github', icon: <FaGithub className='w-20 h-10' /> },
        { name: 'NodeJS', icon: <img src={nodejs} alt="nodejs" className='w-10 h-10' /> },
        { name: 'MongoDB', icon: <SiMongodb className='w-20 h-20' /> },
        { name: 'Responsive Design', icon: <img src={res} alt="responsive design" className='w-10 h-10' /> }
    ]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <div className='md:p-24 p-10 bg-slate-50'>
                <div
                    className="m-auto max-w-7xl w-9/12 text-center "
                >
                    <h2><span className="font-extrabold text-black text-3xl tracking-wider relative mb-9">ABOUT ME</span></h2>
                    <p className={`${style.line} bg-blue-200 mt-2`}></p>
                    <p className='mt-7 text-xl leading-6 m-auto md:max-w-7xl block font-medium p-3 '>
                        Here you will find more information about me, what I do,
                        and my current skills mostly in terms of programming and technology.
                    </p>
                </div>
            </div>

            <div>
                <div className='bg-white p-4'>
                    <motion.h2
                        className='font-bold text-2xl tracking-wide leading-4 p-4 mt-3 text-black'
                        initial="hidden"
                        animate="show"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Get to Know me!
                    </motion.h2>
                    <motion.div
                        className='text-xl text-gray-600 p-4 leading-9'
                        initial="hidden"
                        animate="show"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className='mb-4'>
                            Hi, I’m <strong className='text-blue-700'>Dharshini,</strong> a passionate <strong className='text-blue-700'> Full Stack Developer </strong>
                            currently pursuing my second Master’s in Computer Applications (MCA). As a fresher, I am excited about the opportunities to apply my learning
                            to real-world projects and contribute to innovative solutions.
                        </p>
                        <p>
                            My goal is to continually expand my expertise, tackle challenging problems,
                            and be part of a dynamic team where I can grow both professionally and personally.
                            Let’s connect to discuss how I can contribute to your team or share insights about technology!
                        </p>
                        <div className='flex justify-center items-center mt-6 p-4'>
                            <a href='https://www.linkedin.com/in/dharsh06'>
                                <img src={linkedin} className='w-10 h-10 cursor-pointer hover:opacity-50 rounded-md ' alt="LinkedIn" />
                            </a>
                            <a href='https://www.linkedin.com/in/dharsh06'>
                                <FaGithub className='w-20 h-10' />
                            </a>
                        </div>
                    </motion.div>

                    <div className='bg-slate-50 p-10 mt-14'>
                        <motion.h2
                            className='font-extrabold text-black text-3xl tracking-wider relative mb-9 text-center'
                            initial="hidden"
                            animate="show"
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Skills
                        </motion.h2>
                        <div className='grid grid-cols-3 md:flex p-2 gap-3 md:flex-wrap justify-center items-center'>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='w-30 h-20 bg-indigo-50 text-xs md:text-xl md:w-28 md:h-28 font-bold p-3 
                                    gap-2 flex flex-col justify-center items-center rounded-md shadow-sm
                                     shadow-gray-200 hover:-translate-y-1 hover:cursor-pointer hover:opacity-70 hover:bg-gray-200'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
                                >
                                    <p>{skill.name}</p>
                                    {skill.icon}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
