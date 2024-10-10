import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        window.location.href = `mailto:adityajadhav2003c@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    };

    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input 
                            required 
                            type="text" 
                            name='name' 
                            placeholder='Enter your name' 
                            value={formData.name} 
                            onChange={handleChange} 
                            className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                            data-aos="slide-up" 
                            data-aos-duration="500" 
                        />
                        <input 
                            required 
                            type="email" 
                            name='email' 
                            placeholder='Enter your e-mail' 
                            value={formData.email} 
                            onChange={handleChange} 
                            className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                            data-aos="slide-up" 
                            data-aos-duration="700" 
                        />
                        <textarea 
                            required 
                            name="message" 
                            rows="10" 
                            placeholder='Enter your message' 
                            value={formData.message} 
                            onChange={handleChange} 
                            className='p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none' 
                            data-aos="fade-in" 
                            data-aos-duration="900"
                        ></textarea>
                        <button 
                            type="submit" 
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' 
                            data-aos="zoom-in" 
                            data-aos-duration="1000"
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
