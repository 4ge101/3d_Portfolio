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
      title: 'Business Website',
      description: 'A business website to take idea how business website looks.',
      link: 'https://4ge101.github.io/PORTFOLIO/',
      image: 'https://cdn.dribbble.com/userupload/7918389/file/original-8ed1531fd13698a0b5f6e72ef75960c2.png?resize=1024x768',
    },
    {
      title: 'Netflix Clone',
      description: 'To know how my skill is going in web devlopment i cloned netflix website',
      link: 'https://4ge101.github.io/Netflix-Clone/',
      image: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/netflix.jpg',
    },
    {
      title: 'Anime Website',
      description: 'To watching every type of anime i made this anime website',
      link: 'https://4ge101.github.io/Anime_Website/',
      image: 'https://themewagon.com/wp-content/uploads/2020/10/Anime.png',
    },
    {
      title: 'Construction Website',
      description: 'For who was running construction company i made for help to people contact and showing their work',
      link: 'https://4ge101.github.io/construction_website/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbEUg5d-DaC8ompYdwW02pN0fsE0OHsaUwg&s',
    },
    {
      title: 'UltraEdit Website',
      description: 'To know how my skill is going in web devlopment i cloned ultra-edit website',
      link: 'https://4ge101.github.io/construction_website/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8V1GNj0TMFvWaxjSmiiaJCSticAfQ5miAw&s',
    },
    {
      title: 'Sarcasm Website',
      description: 'This website i made as a first css project',
      link: 'https://4ge101.github.io/first-advanced-website/',
      image: 'https://pamutlabor.hu/wp-content/uploads/2018/03/plab0005162-afeaturedimage-white.jpg',
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
