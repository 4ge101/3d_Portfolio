import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Mohammad Sami Ali</span> 👋 <br />
            A Full Stack Web Developer from Nepal</h1>
    ),
    2: (
        <InfoBox
            text="Making many projects and get many skills in the field of web technology"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="To see my work how i done click down for my projects"
            link="/projects"
            btnText="Visit my portfolio"
        />),
    4: (
        <InfoBox
            text="To make any Project contact me"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo