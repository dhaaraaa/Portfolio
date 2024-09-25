
















import React, { useState } from 'react';
import style from '../CSS/Home.module.css';

function Resume() {
    // State for education details
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
        // Add more educational details here if needed
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
            institution: 'Mount Zion Silver Jubliee Matric Hr. Sec.School',
            yearOfPassing: '2020',
            cgpa: '68%'
        },
        {
            level: 'HSC',
            degree: '10',
            institution: 'Mount Zion Silver Jubliee Matric Hr. Sec.School',
            yearOfPassing: '2019',
            cgpa: '91%'
        }
        
    ]);

    return (
        <>
            {/* Education Section */}
            <section className=' bg-red-600'>
                <div className='p-7 bg-orange-200'>
                    <div className="m-auto max-w-7xl w-9/12 text-center mt-10  bg-green-600">
                        <h2 className=''>
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
                <section className='md:grid md:grid-cols-4 justify-center bg-red-600 '>
                    {educationDetails.map((detail, index) => (
                        <div key={index} className='p-2 bg-lime-400'>
                        <div className='bg-orange-300 w-full h-full p-4 justify-center items-center rounded-lg'>

                            <div className='text-center p-2 '>
                                <h1 className='p-1'>{detail.level}</h1>
                                <h2 className='p-1'>{detail.degree}</h2>
                            </div>
                            <div className='flex justify-center p-2'>
                                <div className='bg-indigo-500   text-center p-9 w-96 md:w-full rounded-md'>
                                    <ul>
                                        <li>{detail.institution}</li>
                                        <li>{detail.location}</li>
                                        <li>Year of Passing: <span>{detail.yearOfPassing}</span></li>
                                        <li>{detail.status}</li>
                                        <li> <span>{detail.cgpa}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}

export default Resume;
