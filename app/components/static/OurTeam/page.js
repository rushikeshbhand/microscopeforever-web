// pages/ourteam.js

const teamMembers = [
    {
      name: 'Rushikesh Bhand',
      role: 'Web Developer',
      description: 'Specializes in Next.js and MERN stack development.',
    },
    {
      name: 'Prathmesh Bidkar',
      role: 'Web Developer',
      description: 'Expert in Angular and frontend technologies.',
    },
    {
      name: 'Dhanesh Khedkar',
      role: 'Web Developer',
      description: 'Focuses on backend development and cyber security.',
    },
  ];
  
  const founder = {
    name: 'Ravindra Gorakshnath Bhand',
    role: 'Founder',
    description: 'MSc in Microbiology. Passionate about microbiology and education.',
  };
  
  export default function OurTeam() {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
          <p className="text-lg mb-12">
            Welcome to MicroscopeForever! Meet the dedicated team behind our platform, working tirelessly to bring you the best biology-related content.
          </p>
          
          <div className="mb-12">
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{founder.name}</h2>
              <p className="text-blue-500 mb-2">{founder.role}</p>
              <p className="text-gray-700">{founder.description}</p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                <p className="text-blue-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  