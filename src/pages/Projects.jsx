import React from 'react'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My<span className='blue-gradient_text relative left-3 font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-800'>
        <p>I've worked on a variety of projects, including GHOST AI, a voice assistant that responds to commands and provides updates. I also built a 3D Island website using React and Three.js, featuring a fully interactive 3D environment. Additionally, I developed a school website with an admin panel for event management and created my personal portfolio to showcase my skills in web development. </p>
      </div>
    </section>
  )
}

export default Projects