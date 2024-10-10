import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                Dynamic and driven Java and MERN Stack Developer with a solid background in web development. Skilled in both front-end and back-end technologies, including MongoDB, Express.js, React, and Node.js. Committed to creating robust and scalable solutions, I am excited to leverage my skills in practical applications. A fast learner with a strong adaptability to new technologies, I thrive in collaborative environments and am eager to contribute to innovative projects.

</p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                With a mindset focused on learning and growth, I bring a collaborative attitude to every team I work with. My ability to lead with a growth mindset enables me to guide teams effectively, achieving our shared goals while fostering an environment where every member can thrive and contribute. I am dedicated to making a positive impact through teamwork and collective effort.                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://drive.google.com/file/d/18AVtVgHqAETgfLpZNk0KDQBWlAWpaOeR/view?usp=sharing" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About