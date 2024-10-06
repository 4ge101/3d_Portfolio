import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaLinux, FaGithub } from 'react-icons/fa';
import Footer from "../components/Footer";
import { SiTypescript } from 'react-icons/si';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Mohammad Sami Ali</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-800'>
        <p>Hi, I'm Mohammad Sami Ali, a passionate web developer with a knack for creating dynamic and interactive websites. I've worked on a variety of web projects, from personal portfolios to complex applications. My expertise spans across modern technologies like HTML, CSS, JavaScript, and frameworks like React. I enjoy transforming ideas into fully functional and visually appealing websites. Let's build something amazing together!</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex justify-center flex-wrap gap-12'>
          <div className='flex flex-col items-center'>
            <FaHtml5 className='text-6xl shadow-md p-4 rotate-12 rounded-md text-orange-500 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>HTML</span>
          </div>

          <div className='flex flex-col items-center'>
            <FaCss3Alt className='text-6xl shadow-md p-4 rotate-12 rounded-md text-blue-500 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>CSS</span>
          </div>

          <div className='flex flex-col items-center'>
            <FaJs className='text-6xl shadow-md p-4 rotate-12 rounded-md text-yellow-500 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>JavaScript</span>
          </div>

          <div className='flex flex-col items-center'>
            <SiTypescript className='text-6xl shadow-md p-4 rotate-12 rounded-md text-yellow-500 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>TypeScript</span>
          </div>

          <div className='flex flex-col items-center'>
            <FaLinux className='text-6xl shadow-md p-4 rotate-12 rounded-md text-black hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>Linux</span>
          </div>

          <div className='flex flex-col items-center'>
            <FaGitAlt className='text-6xl p-4 rotate-12 shadow-md rounded-md text-red-500 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>Git</span>
          </div>

          <div className='flex flex-col items-center'>
            <FaGithub className='text-6xl p-4 rotate-12 shadow-md rounded-md text-gray-800 hover:translate-y-[-10px] transition-transform' />
            <span className='mt-4'>GitHub</span>
          </div>

        </div>
      </div>

      <CTA />

      <Footer />
    </section>
  );
}

export default About;
