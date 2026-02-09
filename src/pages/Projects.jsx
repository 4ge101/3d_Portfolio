import React from 'react';
import Footer from "../components/Footer";
import CTA from '../components/CTA';
import Agency_image from '../assets/images/agency.png';

const Projects = () => {
  const projectList = [
    // {
    //   title: 'GHOST AI',
    //   description: 'A voice assistant that responds to commands and provides updates. Built using JavaScript and Web Speech API.',
    //   link: 'https://4ge101.github.io/MEDUSA_AI/',
    //   image: 'https://4ge101.github.io/MEDUSA_AI/no-more.gif',
    // },
    {
      title: 'Agency',
      description: 'A Agency platform where you can buy webiste for your bussiness',
      link: 'https://akesha.netlify.app/',
      image: Agency_image,
    },
  ];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My<span className='blue-gradient_text relative left-3 font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-800'>
        <p>I've worked on a variety of projects like a small AI, school website, business website, Netflix clone etc.</p>
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {projectList.map((project, index) => (
          <div className='project-card p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-t-lg' />
            <h3 className='text-2xl font-bold mt-4'>{project.title}</h3>
            <p className='text-gray-700 mt-2'>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300'>
              View Project
            </a>
          </div>
        ))}
      </div>

      <CTA />
      <Footer />
    </section>
  )
}

export default Projects;
