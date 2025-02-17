import React,{useEffect} from 'react'
import spotify from '../assets/projects/spotify.png'
import Testinomial from '../assets/projects/Testinomial.png'
import Shop from '../assets/projects/Shop.png'
import sadhguru from  '../assets/projects/sadhguru.png'
import Nike from '../assets/projects/Nike.png'
import wanderlusr from '../assets/projects/wanderlust.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: sadhguru,
      desc: "Sadhguru Real Estate is a comprehensive platform that specializes in facilitating property transactions, offering exceptional services to clients for buying, selling, and renting properties....",
      code: "https://realestate-npj7.onrender.com"
    },
    {
      id: 2,
      src: Nike,
      desc: "The Nike website project aims to create an engaging online platform for showcasing and selling Nike products, featuring a sleek design and user-friendly navigation.",
      code: "https://github.com/1123Aditya/Nike-Shoes"
    },
    {
      id: 3,
      src: wanderlusr,
      desc: "Wanderlust is an innovative platform inspired by Airbnb, designed to connect travelers with unique accommodations and experiences around the world...",
    
      code: "https://github.com/1123Aditya/Wanderlust-Project"
    },
    {
      id: 4,
      src: spotify,
      desc: "The Spotify clone project aims to replicate the functionality of the popular music streaming service, offering users access to a vast library of songs and playlists....",
      code: "https://github.com/1123Aditya/Spotify-Clone"
    },
    
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
             Projects().map(({ id, src, desc, /*demo,*/ code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button> */}
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects