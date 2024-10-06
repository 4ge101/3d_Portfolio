import React from 'react';
import Footer from "../components/Footer";
import CTA from '../components/CTA';

const Projects = () => {
  const projectList = [
    {
      title: 'GHOST AI',
      description: 'A voice assistant that responds to commands and provides updates. Built using JavaScript and Web Speech API.',
      link: 'https://4ge101.github.io/MEDUSA_AI/',
      image: 'https://4ge101.github.io/MEDUSA_AI/no-more.gif',
    },
    {
      title: 'School Website',
      description: 'A school website with an admin panel for event management, allowing administrators to post updates and manage events.',
      link: 'https://4ge101.github.io/School-remake-website/',
      image: 'https://4ge101.github.io/School-remake-website/assets/card-img/images.jpeg',
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing my skills in web development and previous projects.',
      link: 'https://4ge101.github.io/PORTFOLIO/',
      image: 'https://cdn.dribbble.com/userupload/7918389/file/original-8ed1531fd13698a0b5f6e72ef75960c2.png?resize=1024x768',
    },
  ];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My<span className='blue-gradient_text relative left-3 font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-800'>
        <p>I've worked on a variety of projects, including GHOST AI, a voice assistant that responds to commands and provides updates. I also built a 3D Island website using React and Three.js, featuring a fully interactive 3D environment. Additionally, I developed a school website with an admin panel for event management and created my personal portfolio to showcase my skills in web development.</p>
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
