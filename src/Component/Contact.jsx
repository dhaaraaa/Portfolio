import style from '../CSS/Home.module.css'
import { IoMdContact } from "react-icons/io";
function Contact() {
    return (
        <>
            <div className=' p-8 bg-slate-50'>
                <div className=" m-auto max-w-7xl w-9/12 text-center">
                    <div className='flex justify-center items-center mt-2 p-3 '>
                        <h2><span className="font-extrabold text-black text-3xl tracking-wider relative mb-9 ">
                            CONTACT</span></h2>
                        <IoMdContact className='w-9 h-9' />
                    </div>

                    <p className={`${style.line} bg-blue-200 mt-2`}></p>
                    <p className='mt-7 text-xl p-2  leading-6 m-auto  max-w-7xl block font-medium'>Let’s collaborate and create something amazing. Contact me today!</p>
                </div>


                <div className='flex justify-center items-center p-4 mt-10 '>
                    <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-9/12 ">
                        <form action="#" method="POST">
                            <div class="mb-4">
                                <label for="name" className=" text-gray-700 text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="email" className=" text-gray-700 text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label for="phone" className=" text-gray-700 text-sm font-semibold mb-2">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="message" className=" text-gray-700 text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;