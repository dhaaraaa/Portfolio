// src/Component/Resume.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import style from '../CSS/Home.module.css';

function Resume() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const [educationDetails] = useState([
        {
            level: 'POST GRADUATION',
            degree: 'MASTERS OF COMPUTER APPLICATIONS',
            institution: 'JJ College of Arts and Science',
            location: 'Pudukottai',
            yearOfPassing: '2023-2025',
            status: 'Pursuing',
            cgpa: '8.5'
        },
        {
            level: 'UNDERGRADUATION',
            degree: 'BACHELOR OF COMPUTER APPLICATIONS',
            institution: 'JJ College of Arts and Science',
            location: 'Pudukottai',
            yearOfPassing: '2020-2023',
            status: 'Completed',
            cgpa: '8.6'
        },
        {
            level: 'HSC',
            degree: '+2',
            institution: 'Mount Zion Silver Jubilee Matric Hr. Sec. School',
            location: 'Karaikudi',
            yearOfPassing: '2020',
            status: 'Completed',
            cgpa: '68%'
        },
        {
            level: 'STATEBOARD',
            degree: '10',
            institution: 'Mount Zion Silver Jubilee Matric Hr. Sec. School',
            location: 'Karaikudi',
            yearOfPassing: '2019',
            status: 'Completed',
            cgpa: '91%'
        }
    ]);

    const handleToggle = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const detailsVariants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
    };

    return (
        <>
            <div className='p-8 mt-5 bg-slate-50'>
                <div className="m-auto max-w-7xl w-9/12 text-center mt-10">
                    <h2>
                        <span className="font-extrabold text-black text-3xl tracking-wider relative mb-9">
                            EDUCATION
                        </span>
                    </h2>
                    <p className={`${style.line} bg-blue-200 mt-2`}></p>
                    <p className='mt-7 text-xl p-2 leading-6 m-auto flex justify-center font-medium'>
                        My Academic Journey: The Foundation of My Expertise
                    </p>
                </div>
            </div>

            <div className='p-5'>
                {educationDetails.map((item, index) => (
                    <div key={index} className='mb-4 flex flex-col justify-center'>
                        <div
                            tabIndex={0}
                            role="button"
                            onKeyPress={(e) => e.key === 'Enter' && handleToggle(index)}
                            className='bg-blue-200 p-4 cursor-pointer rounded-sm text-black flex justify-between items-center'
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className='text-xl font-semibold text-gray-800'>{item.level}</h3>
                            <span>{visibleIndex === index ? '-' : '+'}</span>
                        </div>
                        <motion.div
                            initial={false}
                            animate={visibleIndex === index ? "open" : "closed"}
                            variants={detailsVariants}
                            transition={{ duration: 0.3 }}
                            className={`overflow-hidden`}
                        >
                            <ul className='space-y-2'>
                                <li className='tracking-wider'><strong>Institution:</strong> {item.institution}</li>
                                <li className='tracking-wider'><strong>Degree:</strong> {item.degree}</li>
                                <li className='tracking-wider'><strong>Location:</strong> {item.location}</li>
                                <li className='tracking-wider'><strong>Year of Passing:</strong> {item.yearOfPassing}</li>
                                <li className='tracking-wider'><strong>Status:</strong> {item.status}</li>
                                <li className='tracking-wider'><strong>PERCENTAGE:</strong> {item.cgpa}</li>
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Resume;
