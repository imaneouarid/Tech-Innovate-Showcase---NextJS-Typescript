import React from 'react'

const AboutPage = () => {
    const teamMembers = [
        {
          id: 1,
          name: 'John Doe',
          role: 'CEO',
          image: '/girl.png',
          
        },
        {
          id: 2,
          name: 'Jane Smith',
          role: 'CTO',
          image: '/ima.jpeg',
        },
        {
          id: 3,
          name: 'Alice Johnson',
          role: 'Lead Developer',
          image: '/male.png',
        },
        {
          id: 4,
          name: 'Bob Williams',
          role: 'Designer',
          image: '/ima.jpeg',
        },
        {
          id: 5,
          name: 'Eva Davis',
          role: 'Marketing Manager',
          image: '/girl.png',
        },
        {
          id: 6,
          name: 'Chris Brown',
          role: 'QA Engineer',
          image: '/male.png',
        },
      ];
    return (
        <div className="bg-gray-100 min-h-screen">
          <main className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white p-4 rounded shadow-xl">
                  <div className=" h-32 mb-1">
                    <img style={{maxWidth: '40%',}}
                      src={member.image}
                      alt={`Image for ${member.name}`}
                      className="rounded-full mx-28 p-3 m-3 text-center "
                    />
                  </div>
                  <br /> 
                    <br />
                  <div className='p-3 '>
                  <h2 className=" text-center text-xl font-bold mb-2">{member.name}</h2>
                  <p className=" text-center text-gray-700">{member.role}</p></div>
                  {/* Add more member details or actions as needed */}
                </div>
              ))}
            </div>
          </main>
        </div>
      );
}

export default AboutPage