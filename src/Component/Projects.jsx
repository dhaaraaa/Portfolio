// src/Component/Projects.js
import { motion } from 'framer-motion';
import style from '../CSS/Home.module.css'; // Ensure this path is correct
import Greenden from '../images/Greenden.png';
import Udemy from '../images/udemy.png';
import counter from '../images/counter.png';
import weather from '../images/weather.png';
import actodo from '../images/Actodo.png';
import Trip from '../images/Tripadvisor.png';
import React, { useState } from 'react';

function Projects() {
    const [data] = useState([
        {
            title: "Greenden",
            description: "The Greenden project is a sleek and responsive web application focused on environmental awareness and sustainable practices.",
            language: "TailwindCSS, HTML, JS",
            git: "https://dhaaraaa.github.io/Greenden/",
            icon: Greenden
        },
        {
            title: "Udemy-Clone",
            description: "The Udemy Clone project aims to replicate the user interface and basic functionality of the popular online learning platform, Udemy.",
            language: "HTML, CSS",
            git: "https://dhaaraaa.github.io/Udemy-pj/",
            icon: Udemy
        },
        {
            title: "Counter",
            description: "The Counter App is a simple application built with React.js that allows users to increment, decrement, and reset a counter.",
            language: "ReactJS, TailwindCSS, HTML",
            git: "https://vercel.com/dhaaraaas-projects/counter-random-123",
            icon: counter
        },
        {
            title: "Weather",
            description: "A weather application providing real-time weather updates based on user location or searched city.",
            language: "ReactJS, TailwindCSS, HTML",
            git: "https://vercel.com/dhaaraaas-projects/weather",
            icon: weather
        },
        {
            title: "Actodo",
            description: "A task management application for better productivity.",
            language: "ReactJS, TailwindCSS, HTML",
            git: "https://vercel.com/dhaaraaas-projects/actodo",
            icon: actodo
        },
        {
            title: "Tripadvisor",
            description: "The Tripadvisor Clone project aims to replicate the look and feel of the popular travel review platform, Tripadvisor.",
            language: "HTML, CSS",
            git: "https://dhaaraaa.github.io/Tripadvisor/",
            icon: Trip
        }
    ]);

    return (
        <div>
            <div className='p-20 mt-12 bg-slate-50'>
                <div className="m-auto p-2 text-center md:flex flex-col justify-center">
                    <h2>
                        <span className="font-extrabold text-black text-3xl tracking-wider relative mb-9">PROJECTS</span>
                    </h2>
                    <p className={`${style.line} bg-blue-200 mt-2 `}></p>
                    <p className='mt-7 text-xl leading-6 flex w-full md:justify-center font-medium p-1'>
                        Explore a selection of personal projects I’ve developed, showcasing my work and skills
                    </p>
                </div>
            </div>

            <div className='items-center flex flex-col gap-2'>
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className='bg-slate-100 gap-3 mb-2 mt-4 md:flex md:p-8 p-4 rounded-2xl'
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={item.icon}
                            alt={item.title}
                            className='md:w-7/12 rounded-md border shadow-sm shadow-gray-100'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className='flex flex-col justify-center w-full items-center gap-4 text-center'>
                            <h3 className='text-2xl tracking-wide text-blue-500 mb-4 font-extrabold'>{item.title}</h3>
                            <p className='md:text-xl tracking-normal leading-6 mb-1 text-gray-500'>{item.description}</p>
                            <p>
                                <strong className='text-gray-900 mt-2'>Tools used:</strong>
                                <span className='p-2'>{item.language}</span>
                            </p>
                            <motion.button
                                className='tracking-wide w-44 p-2 rounded-md text-center text-white shadow-sm shadow-gray-100 font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a href={item.git} target="_blank" rel="noopener noreferrer">View Project</a>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
