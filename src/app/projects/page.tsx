import React from 'react'

const ProjectsPage = () => {
    const projects = [
        {
          id: 1,
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '/stock.avif', 
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: '/tas.png',
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          image: '/asp.jpeg',
        },
      ];
    
      return (
        <div className=" min-h-screen items-center">
          <main className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-4 rounded shadow-xl items-center">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <div className="relative h-32 mb-4">
                    <img
                      src={project.image}
                      alt={`Image for ${project.title}`}
                      className="rounded w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                  {/* Add more project details or actions as needed */}
                </div>
              ))}
            </div>
          </main>
        </div>
      );
    };
    
    export default ProjectsPage;