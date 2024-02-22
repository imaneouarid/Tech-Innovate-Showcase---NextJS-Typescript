// "use client"
// src/app/pages.tsx

import React from 'react';

import { metadata } from './metaData';

metadata

const Home: React.FC = () => {
  return (

      <div className="">
        <main>
          <section className="hero  text-black h-screen flex flex-col items-center justify-center gap-9">
            <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to</h1>
            <h2 className="text-6xl font-bold mb-8 ">Tech <span className='text-blue-700'>Innovate</span> </h2>
              <p className="text-lg">
                Discover innovative solutions and explore our expertise in technology.
              </p>
            </div>
            <div className="flex flex-col gap-6 container items-center justify-center">
              <img
                src="/logoo.jpg" // Replace with the actual path to your image
                alt="Tech Innovate Startup"
                className="rounded-full h-32 w-32 object-cover"
              />
              
                {/* <h2 className="text-2xl font-bold text-center">Our Startup</h2>
                <p className="text-black-700 text-justify text-2xl">
                  Tech Innovate is a cutting-edge startup dedicated to providing innovative
                  solutions in the ever-evolving world of technology. We aim to transform ideas
                  into reality through our expertise and passion for innovation.
                </p>
              
            
            <h2 className="text-3xl font-bold mb-4 text-center">Partnerships</h2>
            <p className=" text-black-700 text-justify text-2xl">
              We are proud to collaborate with industry leaders and partners who share our vision.
              Together, we strive to create a positive impact and drive innovation in the tech world.
            </p> */}
            </div>
          </section>

          <section className="container mx-auto mt-8">
            

          </section>
          <section className="container mx-auto mt-8">
           
          </section> 

        </main>
      </div>

  );
};

export default Home;