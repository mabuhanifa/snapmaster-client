import React from 'react';
import mypic from '../Data/mypic.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            
            <img className='d-block mx-auto w-25 img-fluid rounded' src={mypic} alt="" />
            <p className='me mx-auto mt-5'>
                Hi, I am Mohammed Abuhanifa a lifestyle photographer with an experience of 10 years of photography.My goal is to become a worldclass level photographer and creating memories capturing wonderful moments. I mostly cover moment related life, including weddings, birthdays, family occasions, fashion, and outdoor photography.
            </p>
        </div>
    );
};

export default About;